import React from 'react';
// import jake from '../assets/img/about.png';
import '../assets/css/footer.css'; 
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div  className="footer-section" >
          <h4>PROVIDE YOUR VEHICLE</h4>
        </div>
        <div className="footer-section">
          <h4>Your Registration is processed with the DMV?</h4>         
          <a href="#"><MdAlternateEmail/> tuksmoto.com</a>
          <a href="#"><FaPhone /> +63959769206</a>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="http://www.facebook.com"><FaFacebook style={{ color: 'blue', fontSize: '24px' }}/></a>
          <a href="http://www.Twitter.com"><FaTwitter style={{ color: 'skyblue', fontSize: '24px' }}/></a>
          <a href="http://www.Instagram.com"><FaInstagram style={{ color: 'red', fontSize: '24px' }}/></a>      
        </div>
      </div>
      <div className="footer-bottom">      
        <p><FaCopyright />  2024 tukzWebsite. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;