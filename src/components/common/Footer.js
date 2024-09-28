// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { footMenu, footSocial } from '../../data/footerData';


// const Footer = () => {

//     const [subValue, setSubValue] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setSubValue('');
//         alert('Thankyou, you are subscribed to receive our daily newsletter');
//     };

//     const currYear = new Date().getFullYear();


//     return (
//         <footer id="footer">
//             <div className="container">
//                 <div className="wrapper footer_wrapper">
//                     <div className="foot_about">
//                         <h2>
//                             <Link to="/">X-Beat</Link>
//                         </h2>
//                         <div className="foot_subs">
//                             <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
//                             <form onSubmit={handleSubmit}>
//                                 <input
//                                     type="email"
//                                     className="input_field"
//                                     placeholder="Email Address*"
//                                     required
//                                     value={subValue}
//                                     onChange={(e) => setSubValue(e.target.value)}
//                                 />
//                                 <button type="submit" className="btn">Subscribe</button>
//                             </form>
//                         </div>
//                     </div>

//                     {
//                         footMenu.map(item => {
//                             const { id, title, menu } = item;
//                             return (
//                                 <div className="foot_menu" key={id}>
//                                     <h4>{title}</h4>
//                                     <ul>
//                                         {
//                                             menu.map(item => {
//                                                 const { id, link, path } = item;
//                                                 return (
//                                                     <li key={id}>
//                                                         <Link to={path}>{link}</Link>
//                                                     </li>
//                                                 );
//                                             })
//                                         }
//                                     </ul>
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             </div>

//             <div className="separator"></div>

//             <div className="sub_footer">
//                 <div className="container">
//                     <div className="sub_footer_wrapper">
//                         <div className="foot_copyright">
//                             <p>
//                                 {currYear} | XBeat. All Rights Reserved.
//                                 Built by | <a href="https://gulshansongara.netlify.app/">Gulshan Songara</a>
//                             </p>
//                         </div>
//                         <div className="foot_social">
//                             {
//                                 footSocial.map((item) => {
//                                     const { id, icon, path } = item;
//                                     return (
//                                         <Link to={path} key={id}>{icon}</Link>
//                                     );
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer >
//     );
// };

// export default Footer;




import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Icons from react-icons

const styles = {
  footerContainer: {
    backgroundColor: '#111', // Black background
    padding: '10px 0',
    color: '#fff', // White text
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderTop: '2px solid #f00', // Red border on top
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '0 10px',
  },
  footerIcons: {
    fontSize: '20px',
    color: '#f00', // Red icons
    transition: 'color 0.3s',
  },
  footerIconsHover: {
    color: '#fff', // White on hover
  },
  footerText: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#aaa', // Grey text for copyright
  },
};

const SmallFooterWithIcons = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Social Media Icons */}
        <a href="https://facebook.com" style={styles.footerIcons}>
          <FaFacebook />
        </a>
        <a href="https://twitter.com" style={styles.footerIcons}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" style={styles.footerIcons}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" style={styles.footerIcons}>
          <FaLinkedin />
        </a>
      </div>

      {/* Footer Text */}
      <div style={styles.footerText}>
        &copy; {new Date().getFullYear()} Grab Deal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default SmallFooterWithIcons;
