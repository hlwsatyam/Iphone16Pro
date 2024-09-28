import React from "react";
import "../LargeArea.css";
function LargeArea() {
  return (
    <div className="largeArea" >
      <div className="left-" >
        <h2>Billing Details</h2>
        <input type="text" placeholder="Full Name" />
        <div>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Full Name" />
        </div>
        <div>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Full Name" />
        </div>
      </div>



      <div>
        <h2>Your Order</h2>
        <div>
          <h3> | Quantity:1 | Total: ₹ </h3>

          <div>
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

          <input type="text" />
          <div>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default LargeArea;
