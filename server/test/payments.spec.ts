const app = require("../server");
import request from "supertest";

const BtSampleData = {
  customerName: "Bhawna Bhati",
  amount: "44",
  currency: "inr",
  ccHolderName: "Bhawna",
  ccNumber: "4111111111111111",
  ccCardType: "other",
  ccExpiry: "09/2022",
  ccCvv: "111",
};

describe("Braintree Payment", () => {
  it("should reach out to Gateway", async () => {
    const res = await request(app).post("/payment").send(BtSampleData);
    expect(res.body).toHaveProperty("data");
  });
});

const PpSampleData = {
  customerName: "Bhawna Bhati",
  amount: "44",
  currency: "usd",
  ccHolderName: "Bhawna",
  ccNumber: "4032036281478626",
  ccCardType: "other",
  ccExpiry: "09/2022",
  ccCvv: "453",
};

describe("Paypal Payment", () => {
  it("should reach out to Gateway", async () => {
    const res = await request(app).post("/payment").send(PpSampleData);
    expect(res.body).toHaveProperty("data");
  });
});
