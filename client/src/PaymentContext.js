import React, { createContext, useState } from "react";
import axios from "axios";

const ApiUrl = "http://localhost:4000/payment";
export const PaymentContext = createContext();

export const PaymentProvider = (props) => {
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);
  const [transactionData, setTransactionData] = useState({});

  const paymentTransaction = async (data) => {
    let result = await axios.post(ApiUrl, data);
    setTransactionData(result.data.data);
    setIsPaymentSubmitted(true);
  };

  return (
    <PaymentContext.Provider
      value={{
        paymentTransaction,
        isPaymentSubmitted,
        setIsPaymentSubmitted,
        transactionData,
        setTransactionData,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
};
