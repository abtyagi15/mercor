import React from "react";
import Logo from "../assests/logo.png";
import dualArrow from "../assests/dualArrow.png";
import Search from "../assests/search-normal.png";
import Calendar from "../assests/calendar-2.png";
import MessageQuestion from "../assests/message-question.png";
import Notification from "../assests/notification.png";
import UserImage from "../assests/user-image.png";
import DropDownArrow from "../assests/arrow-down.png";
const Header = () => {
  return (
    <>
      <div className="flex w-full items-center">
        <div className="flex">
          <img src={Logo} alt="logo" />
          <h1>Project M.</h1>
          <img src={dualArrow} alt="double arrow" />
        </div>
        <div className="flex">
          <div className="flex search-container">
            <img src={Search} alt="search" />
            <p>Search for anything...</p>
          </div>
          <div className="flex icon-container">
            <img src={Calendar} alt="calendar" />
            <img src={MessageQuestion} alt="Q&A" />
            <img src={Notification} alt="notification" />
          </div>
          <div className="userData-container flex">
            <div>
              <p>Anima Agarwal</p>
              <p>U.P,India</p>
            </div>
            <img src={UserImage} alt="user" />
            <img src={DropDownArrow} alt="drop down" />
          </div>
        </div>
      </div>
      <div className="border border-[DBDBDB] "></div>
    </>
  );
};

export default Header;
