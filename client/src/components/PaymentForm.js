import React, { useContext, useState } from "react";

import valid from "card-validator";

import { PaymentContext } from "../PaymentContext";
import "./styles.css";

export function PaymentForm() {
  const paymentContext = useContext(PaymentContext);
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [ccHolderName, setCcHolderName] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccCardType, setCcCardType] = useState("other");
  const [ccExpiry, setCcExpiry] = useState("");
  const [ccCvv, setCcCvv] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const [invalidFieldErrors, setInvalidFieldErrors] = useState({});

  const {
    paymentTransaction,
    isPaymentSubmitted,
    setIsPaymentSubmitted,
    transactionData,
    setTransactionData,
  } = paymentContext;

  const gotoPayment = () => {
    setIsPaymentSubmitted(false);
    setTransactionData({});
  };

  const validateFields = (fieldName = null) => {
    const fieldValidationFunctions = {
      customerName: [valid.cardholderName, customerName, "Customer Full Name"],
      // amount:
      ccHolderName: [valid.cardholderName, ccHolderName, "Card Holder Name"],
      ccNumber: [valid.number, ccNumber, "Card Number"],
      ccExpiry: [valid.expirationDate, ccExpiry, "Card Expiration"],
      ccCvv: [valid.cvv, ccCvv, "CVV"],
    };
    if (fieldName) {
      const [func, argValue, fieldNameLabel] = fieldValidationFunctions[
        fieldName
      ];
      const responseValidation = func(argValue);
      if (!responseValidation.isPotentiallyValid) {
        setIsFormInvalid(true);
        setInvalidFieldErrors({
          ...invalidFieldErrors,
          [fieldName]: `Invalid value for field **${fieldNameLabel}**`,
        });
      } else {
        const {
          [fieldName]: value,
          ...withoutCurrentField
        } = invalidFieldErrors;
        setInvalidFieldErrors(withoutCurrentField);
        if (Object.keys(withoutCurrentField).length === 0) {
          setIsFormInvalid(false);
        }
      }
      if (
        fieldName === "ccNumber" &&
        responseValidation.card &&
        responseValidation.card.type
      ) {
        setCcCardType(responseValidation.card.type);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormInvalid) {
      console.log(invalidFieldErrors);
      alert("Input is not valid");
      return;
    }
    paymentTransaction({
      customerName,
      amount,
      currency,
      ccHolderName,
      ccNumber,
      ccCardType,
      ccExpiry,
      ccCvv,
    });
  };

  return (
    <>
      {isPaymentSubmitted ? (
        <div>
          <h1>Payment Status</h1>
          <div hidden={transactionData.success} className="error">
            Error:
            {transactionData.message !== undefined
              ? transactionData.message
              : "Unknow Error. Please contact admin..."}
            <br></br>
          </div>
          <div hidden={!transactionData.success} className="success">
            <span>Amount: </span>
            {transactionData.transaction !== undefined
              ? transactionData.transaction.amount
              : "N/A"}
            <br></br>
            <span>PaymentInstrumentType: </span>
            {transactionData.transaction !== undefined
              ? transactionData.transaction.paymentInstrumentType
              : "N/A"}
            <br></br>
            <span>Status: </span>
            {transactionData.transaction !== undefined
              ? transactionData.transaction.status
              : "N/A"}
            <br></br>
            <span>Transaction id: </span>
            {transactionData.transaction !== undefined
              ? transactionData.transaction.id
              : "N/A"}
            <br></br>
          </div>
          <button style={{ marginTop: "15px" }} onClick={gotoPayment}>
            Go Back
          </button>
        </div>
      ) : (
        <form
          submit="/"
          method="post"
          id="paymentForm"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div hidden={!isFormInvalid}>
            <ul className="errorList">
              {Object.keys(invalidFieldErrors).map((key) => {
                return <li>{invalidFieldErrors[key]}</li>;
              })}
            </ul>
          </div>
          <fieldset>
            <legend>Order</legend>
            <label htmlFor="customerName">
              Customer Full Name:{" "}
              <input
                type="text"
                name="customerName"
                value={customerName}
                onChange={(e) => {
                  validateFields("customerName");
                  setCustomerName(e.target.value);
                }}
              />
            </label>
            <br />
            <label htmlFor="amount">
              Price:{" "}
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={(e) => {
                  // validateFields("amount");
                  setAmount(e.target.value);
                }}
              />
            </label>
            <br />
            <label htmlFor="currency">
              Currency:{" "}
              <select
                name="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="usd">USD</option>
                {/* <option value="inr">INR</option> */}
                <option value="aud">AUD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </label>
            <br />
          </fieldset>
          <fieldset>
            <legend>Payment</legend>
            <label htmlFor="ccHolderName">
              Card Holder Name:{" "}
              <input
                type="text"
                name="ccHolderName"
                value={ccHolderName}
                onChange={(e) => {
                  validateFields("ccHolderName");
                  setCcHolderName(e.target.value);
                }}
              />
            </label>
            <br />
            <label htmlFor="ccNumber">
              Card Number:{" "}
              <input
                type="text"
                name="ccNumber"
                value={ccNumber}
                onChange={(e) => {
                  validateFields("ccNumber");
                  setCcNumber(e.target.value);
                }}
              />
            </label>
            <br />
            <label htmlFor="ccExpiry">
              Card Expiration:{" "}
              <input
                type="text"
                name="ccExpiry"
                value={ccExpiry}
                onChange={(e) => {
                  validateFields("ccExpiry");
                  setCcExpiry(e.target.value);
                }}
                placeholder="MM/YYYY"
              />
            </label>
            <br />
            <label htmlFor="ccCvv">
              CVV:{" "}
              <input
                type="text"
                name="ccCvv"
                value={ccCvv}
                onChange={(e) => {
                  validateFields("ccCvv");
                  setCcCvv(e.target.value);
                }}
              />
            </label>
            <br />
          </fieldset>
          <input type="submit" name="submit" value="Submit" />
        </form>
      )}
    </>
  );
}
