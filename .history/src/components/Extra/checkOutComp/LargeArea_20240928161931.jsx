// import React from "react";
// import "../LargeArea.css";
// function LargeArea() {
//   return (
//     <div className="largeArea">
//       <div className="left-area">
//         <h2>Billing Details</h2>
//         <input type="text" placeholder="Full Name" />
//         <input type="text" placeholder="Mobile Number" />

//         <div className="city-state">
//           <input type="text" placeholder="City" />
//           <input type="text" placeholder="State" />
//         </div>
//         <div className="city-state">
//           <input type="text" placeholder="Address" />
//           <input type="text" placeholder="Pincode / Zip" />
//         </div>
//       </div>

//       <div className="right-area">
//         <h2>Your Order</h2>
//         <div className="right-container">
//           <h3 className="qunt" > | Quantity:1 | Total: ₹ </h3>

//           <div className="card-selection">
//             <p>
//               <input type="checkbox" name="" id="" /> <span>Credit Card</span>
//             </p>
//             <p>
//               <input type="checkbox" name="" id="" /> <span>Debit Card</span>
//             </p>
//             <p>
//               <input type="checkbox" name="" id="" />{" "}
//               <span>Cash On Delevery</span>
//             </p>
//           </div>
//           <p className="t1" >Card Details</p>
//           <input type="text" placeholder="Card Number" />
//           <div className="expiry-date">
//             <input type="text" placeholder="MM" />
//             <input type="text" placeholder="YY" />
//             <input type="text" placeholder="CVV" />
//           </div>
//           <button>Place Order</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LargeArea;

import React, { useState } from "react";
import axios from "axios";
import "../LargeArea.css";

function LargeArea() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    city: "",
    state: "",
    address: "",
    pincode: "",
    paymentMethod: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.city ||
      !formData.state ||
      !formData.address ||
      !formData.pincode
    ) {
      setErrorMessage("Please fill in all the billing details.");
      return false;
    }

    if (formData.paymentMethod === "") {
      setErrorMessage("Please select a payment method.");
      return false;
    }

    if (
      formData.paymentMethod !== "Cash On Delivery" &&
      (!formData.cardNumber ||
        !formData.expiryMonth ||
        !formData.expiryYear ||
        !formData.cvv)
    ) {
      setErrorMessage("Please fill in all card details.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/checkout",
        formData
      );
      if (response.status === 200) {
        alert("Order placed successfully!");
      }
    } catch (error) {
      console.error("Error sending data to backend", error);
      alert("Error placing order, please try again.");
    }
  };

  return (
    <div className="largeArea">
      <div className="left-area">
        <h2>Billing Details</h2>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        <div className="city-state">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="city-state">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode / Zip"
            value={formData.pincode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="right-area">
        <h2>Your Order</h2>
        <div className="right-container">
          <h3 className="qunt"> | Quantity: 1 | Total: ₹61,000 </h3>
          <h3 className="qunt2">
            Apple iPhone 16 Pro (128 GB) - Desert Titanium{" "}
          </h3>

          <div className="card-selection">
            <p>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                onChange={handlePaymentMethodChange}
              />{" "}
              <span>Credit Card</span>
            </p>
            <p>
              <input
                type="radio"
                disabled
                name="paymentMethod"
                value="Debit Card"
                onChange={handlePaymentMethodChange}
              />{" "}
              <span>Debit Card</span>
            </p>
            <p>
              <input
                disabled
                type="radio"
                name="paymentMethod"
                value="Cash On Delivery"
                onChange={handlePaymentMethodChange}
              />{" "}
              <span>Cash On Delivery</span>
            </p>
          </div>

          {formData.paymentMethod !== "Cash On Delivery" && (
            <>
              <p className="t1">Card Details</p>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              <div className="expiry-date">
                <input
                  type="text"
                  name="expiryMonth"
                  placeholder="MM"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="expiryYear"
                  placeholder="YY"
                  value={formData.expiryYear}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <button onClick={handleSubmit}>Place Order</button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LargeArea;
