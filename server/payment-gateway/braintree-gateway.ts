import braintree from "braintree";
import { PaymentRecord, PaymentResponse } from "../types";

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BT_MERCHANT_ID || "",
  publicKey: process.env.BT_PUBLIC_KEY || "",
  privateKey: process.env.BT_SECRET_KEY || "",
});

const makePayment = async (paymentDetail: PaymentRecord) => {
  const { amount_paid, card_number, card_expiration, cvv } = paymentDetail;
  const [exp_year, exp_month] = card_expiration.split("-");
  const transactionResponse = await gateway.transaction.sale({
    amount: amount_paid.toString(),
    creditCard: {
      number: card_number,
      expirationMonth: exp_month,
      expirationYear: exp_year,
      cvv: cvv,
    },
    options: {
      // This option requests the funds from the transaction
      // once it has been authorized successfully
      submitForSettlement: true,
    },
  });

  let returnResponse: PaymentResponse;
  // = {
  //   transaction: {} | undefined;
  //   errors: {} | undefined;
  //   success: boolean;
  //   message: string|undefined;
  // };

  // Return cut down version of response
  if (transactionResponse.success) {
    const {
      id,
      amount,
      paymentInstrumentType,
      status,
    } = transactionResponse.transaction;
    returnResponse = {
      success: !!transactionResponse.success,
      transaction: {
        id: id,
        amount: amount,
        status: status,
        paymentInstrumentType: paymentInstrumentType,
      },
    };
  } else {
    returnResponse = {
      success: !!transactionResponse.success,
      message: transactionResponse.message,
      errors: transactionResponse.errors,
    };
  }
  return returnResponse;
};

export { makePayment };
