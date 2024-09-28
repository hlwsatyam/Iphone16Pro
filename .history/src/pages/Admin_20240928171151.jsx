// import React, { useState, useEffect } from 'react';

// // Single Component for Admin Login and Dashboard
// const AdminPanel = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Admin login state
//   const [checkoutData, setCheckoutData] = useState([]); // Data state
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(''); // Error state for login

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Login form validation
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'admin123') {
//       setIsLoggedIn(true);
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   // Fetch data from backend (simulate loading and data retrieval)
//   useEffect(() => {
//     if (isLoggedIn) {
//       setLoading(true);
//       fetch('https://iphone16propromotinalbackend.onrender.com/admin/checkout-data')
//         .then((res) => res.json())
//         .then((data) => {
//           setCheckoutData(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error('Error fetching data:', err);
//           setLoading(false);
//         });
//     }
//   }, [isLoggedIn]);

//   return (
//     <div style={styles.container}>
//       {isLoggedIn ? (
//         <div style={styles.dashboardContainer}>
//           <h1 style={styles.dashboardTitle}>Admin Dashboard</h1>
//           {loading ? (
//             <p style={styles.loadingText}>Loading data...</p>
//           ) : (
//             <table style={styles.table}>
//               <thead>
//                 <tr style={styles.tableRow}>
//                   <th style={styles.tableHeader}>Name</th>
//                   <th style={styles.tableHeader}>Phone</th>
//                   <th style={styles.tableHeader}>Email</th>
//                   <th style={styles.tableHeader}>Pincode</th>
//                   <th style={styles.tableHeader}>District</th>
//                   <th style={styles.tableHeader}>City</th>
//                   <th style={styles.tableHeader}>State</th>
//                   <th style={styles.tableHeader}>Street</th>
//                   <th style={styles.tableHeader}>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {checkoutData.map((entry) => (
//                   <tr key={entry._id} style={styles.tableRow}>
//                     <td style={styles.tableCell}>{entry.name}</td>
//                     <td style={styles.tableCell}>{entry.phone}</td>
//                     <td style={styles.tableCell}>{entry.email}</td>
//                     <td style={styles.tableCell}>{entry.pincode}</td>
//                     <td style={styles.tableCell}>{entry.district}</td>
//                     <td style={styles.tableCell}>{entry.city}</td>
//                     <td style={styles.tableCell}>{entry.state}</td>
//                     <td style={styles.tableCell}>{entry.street}</td>
//                     <td style={styles.tableCell}>
//                       {new Date(entry.createdAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       ) : (
//         <div style={styles.loginContainer}>
//           <form onSubmit={handleLogin} style={styles.loginForm}>
//             <h2 style={styles.formTitle}>Admin Login</h2>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               style={styles.inputField}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               style={styles.inputField}
//               required
//             />
//             {error && <p style={styles.errorMessage}>{error}</p>}
//             <button type="submit" style={styles.loginButton}>Login</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// // Inline CSS styles for the component
// const styles = {
//   container: {
//     backgroundColor: '#1a1a1a',
//     color: '#fff',
//     minHeight: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   loginContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   loginForm: {
//     backgroundColor: '#111',
//     padding: '40px',
//     borderRadius: '10px',
//     boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.8)',
//     width: '300px',
//   },
//   formTitle: {
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   inputField: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     border: 'none',
//     borderRadius: '5px',
//     backgroundColor: '#333',
//     color: '#fff',
//     outline: 'none',
//   },
//   errorMessage: {
//     color: 'red',
//     textAlign: 'center',
//   },
//   loginButton: {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: 'red',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   dashboardContainer: {
//     width: '80%',
//     margin: '0 auto',
//   },
//   dashboardTitle: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     color: 'red',
//     fontSize: '32px',
//   },
//   loadingText: {
//     textAlign: 'center',
//     color: '#fff',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     backgroundColor: '#111',
//   },
//   tableRow: {
//     borderBottom: '1px solid #444',
//   },
//   tableHeader: {
//     padding: '10px',
//     textAlign: 'left',
//     color: '#fff',
//     backgroundColor: 'red',
//     fontWeight: 'bold',
//   },
//   tableCell: {
//     padding: '10px',
//     textAlign: 'left',
//     color: '#fff',
//   },
// };

// export default AdminPanel;

import axios from "axios";
import React, { useState, useEffect } from "react";

// Single Component for Admin Login and Dashboard
const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Admin login state
  const [checkoutData, setCheckoutData] = useState([]); // Data state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state for login

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login form validation
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  // Fetch data from backend (simulate loading and data retrieval)
  useEffect(async () => {
    if (isLoggedIn) {
      setLoading(true);
      const re = await axios.get("/admin/checkout-data");
      if(re.status===200)
    }
  }, [isLoggedIn]);

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div style={styles.dashboardContainer}>
          <h1 style={styles.dashboardTitle}>Admin Dashboard</h1>
          {loading ? (
            <p style={styles.loadingText}>Loading data...</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableRow}>
                  <th style={styles.tableHeader}>Full Name</th>
                  <th style={styles.tableHeader}>Mobile Number</th>
                  <th style={styles.tableHeader}>City</th>
                  <th style={styles.tableHeader}>State</th>
                  <th style={styles.tableHeader}>Address</th>
                  <th style={styles.tableHeader}>Pincode</th>
                  <th style={styles.tableHeader}>Payment Method</th>
                  <th style={styles.tableHeader}>Created At</th>
                </tr>
              </thead>
              <tbody>
                {checkoutData.map((entry) => (
                  <tr key={entry._id} style={styles.tableRow}>
                    <td style={styles.tableCell}>{entry.fullName}</td>
                    <td style={styles.tableCell}>{entry.mobileNumber}</td>
                    <td style={styles.tableCell}>{entry.city}</td>
                    <td style={styles.tableCell}>{entry.state}</td>
                    <td style={styles.tableCell}>{entry.address}</td>
                    <td style={styles.tableCell}>{entry.pincode}</td>
                    <td style={styles.tableCell}>{entry.paymentMethod}</td>
                    <td style={styles.tableCell}>
                      {new Date(entry.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <div style={styles.loginContainer}>
          <form onSubmit={handleLogin} style={styles.loginForm}>
            <h2 style={styles.formTitle}>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.inputField}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.inputField}
              required
            />
            {error && <p style={styles.errorMessage}>{error}</p>}
            <button type="submit" style={styles.loginButton}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

// Inline CSS styles for the component
const styles = {
  container: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginForm: {
    backgroundColor: "#111",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.8)",
    width: "300px",
  },
  formTitle: {
    color: "#fff",
    textAlign: "center",
    marginBottom: "20px",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "#fff",
    outline: "none",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  dashboardContainer: {
    width: "80%",
    margin: "0 auto",
  },
  dashboardTitle: {
    textAlign: "center",
    marginBottom: "20px",
    color: "red",
    fontSize: "32px",
  },
  loadingText: {
    textAlign: "center",
    color: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#111",
  },
  tableRow: {
    borderBottom: "1px solid #444",
  },
  tableHeader: {
    padding: "10px",
    textAlign: "left",
    color: "#fff",
    backgroundColor: "red",
    fontWeight: "bold",
  },
  tableCell: {
    padding: "10px",
    textAlign: "left",
    color: "#fff",
  },
};

export default AdminPanel;
