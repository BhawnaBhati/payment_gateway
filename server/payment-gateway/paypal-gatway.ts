import axios from "axios";
import _ from "lodash";
import { PaymentRecord, PaymentResponse } from "../types";

// axios.interceptors.request.use((request) => {
//   console.log("Starting Request", request);
//   return request;
// });

// axios.interceptors.response.use((response) => {
//   console.log("Response:", response);
//   return response;
// });

const getAccessToken = async () => {
  const url = `${process.env.PAYPAL_SANDBOX_URL}/v1/oauth2/token`;
  const basicAuth = Buffer.from(
    `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
  ).toString("base64");

  const result = await axios({
    url: url,
    method: "post",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "x-www-form-urlencoded",
    },
    data: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  });
  return _.get(result, "data.access_token", "NO_TOKEN");
};

const makePayment = async (paymentDetail: PaymentRecord) => {
  const {
    amount_paid,
    card_number,
    card_expiration,
    cvv,
    currency,
  } = paymentDetail;
  const [exp_year, exp_month] = card_expiration.split("-");
  const data = {
    intent: "sale",
    payer: {
      payment_method: "credit_card",
      funding_instruments: [
        {
          credit_card: {
            number: card_number,
            type: "visa",
            expire_month: exp_month,
            expire_year: exp_year,
            cvv2: cvv,
            // first_name: "Joe",
            // last_name: "Buyer",
          },
        },
      ],
    },
    transactions: [
      {
        amount: {
          total: +amount_paid,
          currency: currency.toUpperCase(),
        },
        description: "Credit Card Payment",
      },
    ],
  };
  const accessToken = await getAccessToken();
  const url = `${process.env.PAYPAL_SANDBOX_URL}/v1/payments/payment`;
  try {
    const transactionResponse = await axios({
      url: url,
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        // "Content-Type": "x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
      data: data,
    });
    const { id, state } = transactionResponse.data;
    const { payment_method } = transactionResponse.data.payer;
    const { amount } = transactionResponse.data.transactions[0].amount.total;
    const returnResponse: PaymentResponse = {
      success: true,
      transaction: {
        id: id,
        amount: amount,
        status: state,
        paymentInstrumentType: payment_method,
      },
    };
    return returnResponse;
  } catch (error) {
    return {
      success: false,
      message: "Paypal Payment Request Failed",
      errors: error,
    };
  }
};

export { makePayment };
