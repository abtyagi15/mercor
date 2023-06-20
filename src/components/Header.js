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
    <div className="header-container">
      <div className="flex w-full items-center justify-between pl-[22px] pr-[48px] py-[30px]">
        <div className="flex w-[400px]">
          <img src={Logo} alt="logo" className="w-[24px] h-[24px]" />
          <p className="text-[20px] font-semibold leading-[24px]">Project M.</p>
          <img
            src={dualArrow}
            alt="double arrow"
            className="w-[26px] h-[20px]"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex search-container bg-[#F5F5F5] w-[417px] h-[44px] items-center gap-[16px] rounded-[6px] py-[13px]">
            <img src={Search} alt="search" className="w-[22px] h-[22px] ml-[16.8px]"/>
            <p className="font-normal text-[14px] text-[#787486] leading-[17px]">Search for anything...</p>
          </div>
          <div className="flex">
            <div className="flex icon-container items-center">
              <img src={Calendar} alt="calendar" className="w-[24px] h-[24px]" />
              <img src={MessageQuestion} alt="Q&A" className="w-[24px] h-[24px] ml-[24px]"/>
              <img src={Notification} alt="notification" className="w-[24px] h-[24px] ml-[24px]"/>
            </div>
            <div className="userData-container flex items-center ml-[50px]">
              <div>
                <p className="text-[16px] leading-[19px] font-normal text-[#0D062D]">
                  Anima Agarwal
                </p>
                <p className="text-[14px] fon-normal leading-[17px] text-[#787486] mt-[3px] text-right">
                  U.P,India
                </p>
              </div>
              <img
                src={UserImage}
                alt="user"
                className="w-[38px] h-[38px] rounded-full ml-[22px] mr-[10px]"
                id="owner-user" 
              />
              <img
                src={DropDownArrow}
                alt="drop down"
                className="w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#DBDBDB] "></div>
    </div>
  );
};

export default Header;
