import React from "react";
import Cart from "./cart/index.jsx";
import Checkout from "./checkout/index.jsx";
import Price from "./price/index.jsx";
import { DF } from "./styles.js";

function Carts() {
  return (
    <div>
      <DF>
        <Cart />
        <div>
          <Price />
          <Checkout />
        </div>
      </DF>
    </div>
  );
}

export default Carts;
