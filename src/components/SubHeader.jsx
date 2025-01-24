import React from 'react'
import menu_icon from '../assets/menu-ico.png'

const SubHeader = () => {
  return (
    <div className="sub--header align-items-center d-flex justify-content-between px-2">
      <div className="d-flex align-items-center gap-4 p--tags-con">
        <div className="d-flex align-items-center menu-cont">
          <img className="menu--img" src={menu_icon} alt="" />
          <b>All</b>
        </div>
        <p className="m-0">Today's Deals</p>
        <p className="m-0 d-none d-md-flex">Customer Services</p>
        <p className="m-0">Registry</p>
        <p className="m-0">Gift Cards</p>
        <p className="m-0">Sell</p>
      </div>
      <div className="align-items-center d-none d-md-flex">
        <p className="m-0">Shop the Gaming Store</p>
      </div>
    </div>
  );
}

export default SubHeader