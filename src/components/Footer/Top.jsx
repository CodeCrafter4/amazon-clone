import React from 'react'
import logo from '../../assets/logo.png'
import globe from '../../assets/globe-removebg.png'
import us from '../../assets/usa-flag-removebg.png'

const Top = () => {
  return (
    <div className="footer--top">
      <div className="container d-flex justify-content-center py-4 gap-4 lh-lg">
        <div>
          <p className="fw-bold mb-0">Get to Know Us</p>
          <ul className="list-unstyled">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="mx-3">
          <p className="fw-bold mb-0">Make Money with Us</p>
          <ul className="list-unstyled">
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
           
            
          </ul>
        </div>
        <div className="mx-3">
          <p className="fw-bold mb-0">Amazon Payment Products</p>
          <ul className="list-unstyled">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div>
          <p className="fw-bold mb-0">Let Us Help You</p>
          <ul className="list-unstyled">
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="d-flex container justify-content-center gap-4 align-items-center">
        <div className="d-flex ">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="d-none d-md-flex border border-secondary my-0 py-0 globe d-flex align-items-center">
          <img src={globe} alt="" />
          <p className="pt-2 px-2">English</p>
        </div>
        <div className="border border-secondary my-0 py-0 globe d-flex align-items-center">
          <p className="pt-2 px-2">$USD - U.S. Dollar</p>
        </div>
        <div className="border border-secondary my-0 py-0 globe d-flex align-items-center">
          <img src={us} alt="" />
          <p className="pt-2 px-2">United States</p>
        </div>
      </div>
    </div>
  );
}

export default Top