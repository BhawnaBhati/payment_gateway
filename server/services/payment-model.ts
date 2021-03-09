require("dotenv").config();
import { DB } from "./db-connection";
import { PaymentRecord } from "../types";

const SCHEMA = "client_xyz";

const savePayment = async (paymentItem: PaymentRecord) => {
  await DB.none(
    `INSERT INTO 
    ${SCHEMA}.payment(
        customer_id, customer_fullname, currency, 
        amount_paid, cardholder_name, card_type, 
        card_number, card_expiration, cvv, 
        status, reason_for_failure
    ) VALUES ( 
        random()*1000, $(customerName), $(currency), 
        $(amount_paid), $(cardholder_name), $(card_type), 
        $(card_number), $(card_expiration), $(cvv),
        $(status), $(reason_for_failure)
    )`,
    { ...paymentItem }
  );
};

export { savePayment };
