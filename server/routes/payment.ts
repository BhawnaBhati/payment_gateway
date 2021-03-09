import express from "express";
const router = express.Router();

import _ from "lodash";

import { makePayment as makBtPayment } from "../payment-gateway/braintree-gateway";
import { makePayment as makPpPayment } from "../payment-gateway/paypal-gatway";

import { savePayment } from "../services/payment-model";
import { PaymentRecord, CardType, PaymentStatus } from "../types";

router.post("/", async (req, res) => {
  // TODO req_body structure veriefied using typescript
  const {
    customerName,
    amount,
    currency,
    ccHolderName,
    ccNumber,
    ccCardType,
    ccExpiry,
    ccCvv,
  } = req.body;
  const [exp_month, exp_year] = ccExpiry.split("/");

  let cardTypeAsEnumValue: CardType = CardType.OTHER;
  if (Object.values(CardType).includes(ccCardType.toLowerCase())) {
    cardTypeAsEnumValue = ccCardType.toLowerCase();
  }

  let paymentItem: PaymentRecord = {
    customerName: customerName,
    currency: currency,
    amount_paid: +amount,
    cardholder_name: ccHolderName,
    card_type: cardTypeAsEnumValue,
    card_number: ccNumber,
    card_expiration: `${exp_year}-${exp_month}-01`, //ccExpiry,
    cvv: ccCvv,
    status: PaymentStatus.SUCCESS,
    reason_for_failure: "",
  };

  try {
    console.log("request rcvd...");

    if (currency === "usd" && cardTypeAsEnumValue === "amex") {
      res.status(500).send({
        data: {
          success: false,
          error: "AMEX card can only be used with currency type USD",
        },
      });
    }
    let transactionResponse;
    if (
      cardTypeAsEnumValue === "amex" ||
      currency === "usd" ||
      currency === "eur" ||
      currency === "aud"
    ) {
      transactionResponse = await makPpPayment(paymentItem);
    } else {
      transactionResponse = await makBtPayment(paymentItem);
    }

    if (transactionResponse.success) {
      paymentItem.status = PaymentStatus.SUCCESS;
    } else {
      paymentItem.status = PaymentStatus.ERROR;
      // paymentItem.reason_for_failure = transactionResponse.message;
    }
    await savePayment(paymentItem);
    res.send({ data: transactionResponse });
  } catch (error) {
    console.log(error);
    const err_message = _.get(error, "data.message", error);
    paymentItem.status = PaymentStatus.ERROR;
    paymentItem.reason_for_failure = err_message;

    // TODO: error thrown in catch to be caught at generic level error handler
    await savePayment(paymentItem);
    res.status(500).send({
      data: {
        success: false,
        error: err_message,
      },
    });
  }
});

module.exports = router;
