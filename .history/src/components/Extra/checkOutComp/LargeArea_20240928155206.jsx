import React from "react";
import "../LargeArea.css";
function LargeArea() {
  return (
    <div className="largeArea">
      <div className="left-area">
        <h2>Billing Details</h2>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Mobile Number" />

        <div className="city-state">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="city-state">
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Pincode / Zip" />
        </div>
      </div>

      <div className="right-area">
        <h2>Your Order</h2>
        <div className="right-container">
          <h3> | Quantity:1 | Total: ₹ </h3>

          <div className="card-selection">
            <p>
              <input type="checkbox" name="" id="" /> <span>Credit Card</span>
            </p>
            <p>
              <input type="checkbox" name="" id="" /> <span>Debit Card</span>
            </p>
            <p>
              <input type="checkbox" name="" id="" />{" "}
              <span>Cash On Delevery</span>
            </p>
          </div>
          <p>Card Details</p>
          <input type="text" placeholder="Card Number" />
          <div className="expiry-date">
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
            <input type="text" placeholder="CVV" />
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default LargeArea;
