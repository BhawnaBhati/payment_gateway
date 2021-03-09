import React from "react";
import { PaymentForm } from "./components/PaymentForm";
import { PaymentProvider } from "./PaymentContext";

function App() {
  return (
    <PaymentProvider>
      <div className="App">
        <div>
          <PaymentForm></PaymentForm>
        </div>
      </div>
    </PaymentProvider>
  );
}

export default App;
