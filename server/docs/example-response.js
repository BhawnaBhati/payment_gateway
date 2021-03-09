// Braintree
const x = {
  data: {
    errors: {
      validationErrors: {},
      errorCollections: {
        transaction: {
          validationErrors: {},
          errorCollections: {
            creditCard: {
              validationErrors: {
                cvv: [
                  {
                    attribute: "cvv",
                    code: "81707",
                    message:
                      "CVV must be 4 digits for American Express and 3 digits for other card types.",
                  },
                ],
              },
              errorCollections: {},
            },
          },
        },
      },
    },
    params: {
      transaction: {
        amount: "560",
        creditCard: {
          expirationMonth: "09",
          expirationYear: "2022",
        },
        options: {
          submitForSettlement: "true",
        },
        type: "sale",
      },
    },
    message:
      "CVV must be 4 digits for American Express and 3 digits for other card types.",
    success: false,
  },
};
const y = {
  data: {
    errors: {
      validationErrors: {},
      errorCollections: {
        transaction: {
          validationErrors: {
            amount: [
              {
                attribute: "amount",
                code: "81503",
                message: "Amount is an invalid format.",
              },
            ],
            merchantAccountId: [
              {
                attribute: "merchant_account_id",
                code: "91577",
                message:
                  "Merchant account does not support payment instrument.",
              },
            ],
          },
          errorCollections: {
            creditCard: {
              validationErrors: {
                expirationYear: [
                  {
                    attribute: "expiration_year",
                    code: "81713",
                    message: "Expiration year is invalid.",
                  },
                ],
                expirationMonth: [
                  {
                    attribute: "expiration_month",
                    code: "81712",
                    message: "Expiration month is invalid.",
                  },
                ],
                cvv: [
                  {
                    attribute: "cvv",
                    code: "81707",
                    message:
                      "CVV must be 4 digits for American Express and 3 digits for other card types.",
                  },
                ],
                number: [
                  {
                    attribute: "number",
                    code: "81716",
                    message: "Credit card number must be 12-19 digits.",
                  },
                  {
                    attribute: "number",
                    code: "81703",
                    message:
                      "Credit card type is not accepted by this merchant account.",
                  },
                ],
              },
              errorCollections: {},
            },
          },
        },
      },
    },
    params: {
      transaction: {
        amount: "0c",
        creditCard: {
          expirationMonth: "c",
        },
        options: {
          submitForSettlement: "true",
        },
        type: "sale",
      },
    },
    message:
      "Amount is an invalid format.\nMerchant account does not support payment instrument.\nExpiration year is invalid.\nExpiration month is invalid.\nCVV must be 4 digits for American Express and 3 digits for other card types.\nCredit card number must be 12-19 digits.\nCredit card type is not accepted by this merchant account.",
    success: false,
  },
};
const z = {
  data: {
    transaction: {
      id: "0jh975jm",
      status: "submitted_for_settlement",
      type: "sale",
      currencyIsoCode: "USD",
      amount: "987.00",
      merchantAccountId: "unacademy",
      subMerchantAccountId: null,
      masterMerchantAccountId: null,
      orderId: null,
      createdAt: "2021-03-09T02:26:52Z",
      updatedAt: "2021-03-09T02:26:52Z",
      customer: {
        id: null,
        firstName: null,
        lastName: null,
        company: null,
        email: null,
        website: null,
        phone: null,
        fax: null,
      },
      billing: {
        id: null,
        firstName: null,
        lastName: null,
        company: null,
        streetAddress: null,
        extendedAddress: null,
        locality: null,
        region: null,
        postalCode: null,
        countryName: null,
        countryCodeAlpha2: null,
        countryCodeAlpha3: null,
        countryCodeNumeric: null,
      },
      refundId: null,
      refundIds: [],
      refundedTransactionId: null,
      partialSettlementTransactionIds: [],
      authorizedTransactionId: null,
      settlementBatchId: null,
      shipping: {
        id: null,
        firstName: null,
        lastName: null,
        company: null,
        streetAddress: null,
        extendedAddress: null,
        locality: null,
        region: null,
        postalCode: null,
        countryName: null,
        countryCodeAlpha2: null,
        countryCodeAlpha3: null,
        countryCodeNumeric: null,
      },
      customFields: "",
      avsErrorResponseCode: null,
      avsPostalCodeResponseCode: "I",
      avsStreetAddressResponseCode: "I",
      cvvResponseCode: "M",
      gatewayRejectionReason: null,
      processorAuthorizationCode: "WYFQXG",
      processorResponseCode: "1000",
      processorResponseText: "Approved",
      additionalProcessorResponse: null,
      voiceReferralNumber: null,
      purchaseOrderNumber: null,
      taxAmount: null,
      taxExempt: false,
      scaExemptionRequested: null,
      processedWithNetworkToken: false,
      creditCard: {
        token: null,
        bin: "411111",
        last4: "1111",
        cardType: "Visa",
        expirationMonth: "09",
        expirationYear: "2022",
        customerLocation: "US",
        cardholderName: null,
        imageUrl:
          "https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox",
        prepaid: "Unknown",
        healthcare: "Unknown",
        debit: "Unknown",
        durbinRegulated: "Unknown",
        commercial: "Unknown",
        payroll: "Unknown",
        issuingBank: "Unknown",
        countryOfIssuance: "Unknown",
        productId: "Unknown",
        globalId: null,
        graphQLId: null,
        accountType: null,
        uniqueNumberIdentifier: null,
        venmoSdk: false,
        maskedNumber: "411111******1111",
        expirationDate: "09/2022",
      },
      statusHistory: [
        {
          timestamp: "2021-03-09T02:26:52Z",
          status: "authorized",
          amount: "987.00",
          user: "bvnbhati",
          transactionSource: "api",
        },
        {
          timestamp: "2021-03-09T02:26:52Z",
          status: "submitted_for_settlement",
          amount: "987.00",
          user: "bvnbhati",
          transactionSource: "api",
        },
      ],
      planId: null,
      subscriptionId: null,
      subscription: {
        billingPeriodEndDate: null,
        billingPeriodStartDate: null,
      },
      addOns: [],
      discounts: [],
      descriptor: { name: null, phone: null, url: null },
      recurring: false,
      channel: null,
      serviceFeeAmount: null,
      escrowStatus: null,
      disbursementDetails: {
        disbursementDate: null,
        settlementAmount: null,
        settlementCurrencyIsoCode: null,
        settlementCurrencyExchangeRate: null,
        fundsHeld: null,
        success: null,
      },
      disputes: [],
      authorizationAdjustments: [],
      paymentInstrumentType: "credit_card",
      processorSettlementResponseCode: "",
      processorSettlementResponseText: "",
      networkResponseCode: "XX",
      networkResponseText: "sample network response text",
      threeDSecureInfo: null,
      shipsFromPostalCode: null,
      shippingAmount: null,
      discountAmount: null,
      networkTransactionId: "020210309022652",
      processorResponseType: "approved",
      authorizationExpiresAt: "2021-03-16T02:26:52Z",
      retryIds: [],
      retriedTransactionId: null,
      refundGlobalIds: [],
      partialSettlementTransactionGlobalIds: [],
      refundedTransactionGlobalId: null,
      authorizedTransactionGlobalId: null,
      globalId: "dHJhbnNhY3Rpb25fMGpoOTc1am0",
      graphQLId: "dHJhbnNhY3Rpb25fMGpoOTc1am0",
      retryGlobalIds: [],
      retriedTransactionGlobalId: null,
      retrievalReferenceNumber: "1234567",
      installmentCount: null,
      installments: [],
      refundedInstallments: [],
      responseEmvData: null,
      acquirerReferenceNumber: null,
      merchantIdentificationNumber: "123456789012",
      terminalIdentificationNumber: "00000001",
      merchantName: "DESCRIPTORNAME",
      merchantAddress: {
        streetAddress: "",
        locality: "Braintree",
        region: "MA",
        postalCode: "02184",
        phone: "5555555555",
      },
      pinVerified: false,
      paypalAccount: {},
      paypalHereDetails: {},
      localPayment: {},
      applePayCard: {},
      androidPayCard: {},
      visaCheckoutCard: {},
      samsungPayCard: {},
    },
    success: true,
  },
};

//  Paypal response

const s = {
  id: "PAY-0EK85930GU7345124MBD2H7Y",
  intent: "sale",
  state: "approved",
  payer: {
    payment_method: "credit_card",
    funding_instruments: [
      {
        credit_card: {
          type: "VISA",
          number: "xxxxxxxxxxxx0169",
          expire_month: "2",
          expire_year: "2022",
          first_name: "Joe",
          last_name: "Buyer",
        },
      },
    ],
  },
  transactions: [
    {
      amount: {
        total: "7.47",
        currency: "USD",
      },
      description: "This is the payment transaction description.",
      related_resources: [
        {
          sale: {
            id: "7VA253684T4677526",
            state: "completed",
            amount: {
              total: "7.47",
              currency: "USD",
            },
            processor_response: {
              avs_code: "A",
              cvv_code: "M",
              response_code: "0000",
            },
            parent_payment: "PAY-0EK85930GU7345124MBD2H7Y",
            create_time: "2021-03-09T16:36:15Z",
            update_time: "2021-03-09T16:36:19Z",
            links: [
              {
                href:
                  "https://api.sandbox.paypal.com/v1/payments/sale/7VA253684T4677526",
                rel: "self",
                method: "GET",
              },
              {
                href:
                  "https://api.sandbox.paypal.com/v1/payments/sale/7VA253684T4677526/refund",
                rel: "refund",
                method: "POST",
              },
              {
                href:
                  "https://api.sandbox.paypal.com/v1/payments/payment/PAY-0EK85930GU7345124MBD2H7Y",
                rel: "parent_payment",
                method: "GET",
              },
            ],
          },
        },
      ],
    },
  ],
  create_time: "2021-03-09T16:36:15Z",
  update_time: "2021-03-09T16:36:19Z",
  links: [
    {
      href:
        "https://api.sandbox.paypal.com/v1/payments/payment/PAY-0EK85930GU7345124MBD2H7Y",
      rel: "self",
      method: "GET",
    },
  ],
};

//pay pal request body
{ 
  "intent": "sale",
  "payer": { 
    "payment_method": "credit_card",
    "funding_instruments": [
      { 
        "credit_card": { 
         "number": "4032030441880169",
          "type": "visa",
          "expire_month": 2,
          "expire_year": 2022,
          "cvv2": 668,
          "first_name": "Joe",
          "last_name": "Buyer"
        }
      }
    ]
  },
  "transactions": [
    { 
      "amount": { 
        "total": "7.47",
        "currency": "USD"
      },
      "description": "This is the payment transaction description."
    }
  ]
}
