require("dotenv").config();
import express from "express";
const paymentRouter = require("./routes/payment");

// Create a new express app instance
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res) {
  res.send("Server is running...");
});

app.use("/payment", paymentRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}!`);
});
