export enum CardType {
  AMEX = "amex",
  MASTER = "master",
  VISA = "visa",
  OTHER = "other",
}

export enum PaymentStatus {
  SUCCESS = "success",
  ERROR = "error",
}

export enum Currency {
  USD = "usd",
  EUR = "eur",
  AUD = "aud",
  INR = "inr",
}

export interface PaymentRecord {
  customerName: string;
  currency: Currency;
  amount_paid: number;
  cardholder_name: string;
  card_type: CardType;
  card_number: string;
  card_expiration: string;
  cvv: string;
  status: PaymentStatus;
  reason_for_failure: string | undefined;
}

interface PaymentResponseSuccess {
  success: true;
  transaction: {};
}
interface PaymentResponseError {
  success: false;
  errors: {};
  message: string;
}

export type PaymentResponse = PaymentResponseSuccess | PaymentResponseError;
