import React from "react";
import RenameTitleIcon from "../../assests/title-rename.png";
import LinkCopyIcon from "../../assests/copy-link.png";
import AddInviteBtn from "../../assests/add-invite.png";
import Users from "../../assests/mobile-users.png";
import DropDownBtn from "../../assests/arrow-down.png";
import FilterIcon from "../../assests/filter.png";
import CalendarIcon from "../../assests/calendar.svg";
import ProfileShare from "../../assests/profile-2user.png";
import View from "../../assests/view.png";
import SmallView from "../../assests/small-view.png";
import Card from "../../components/Card";


const MobileApp = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex">
          <span>Mobile App</span>
          <span className="w-[30px] h-[30px] bg-[#5030E5] bg-opacity-20">
            <img src={RenameTitleIcon} alt="title rename button" />
          </span>
          <span className="w-[30px] h-[30px] bg-[#5030E5] bg-opacity-20">
            <img src={LinkCopyIcon} alt="button for copying" />
          </span>
        </div>
        <div className="flex">
          <img src={AddInviteBtn} alt="Add invite button" />
          <p>Invite</p>
          <div className="flex">
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <div className="flex">
            <img src={FilterIcon} alt="filter icon" />
            <p>Filter</p>
            <img src={DropDownBtn} alt="drop down" />
          </div>
          <div className="flex">
            <img src={CalendarIcon} alt="filter icon" />
            <p>Today</p>
            <img src={DropDownBtn} alt="drop down" />
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <img src={ProfileShare} alt="Profile sharing" />
            <p>Share</p>
          </div>
          <div className="w-[1px] bg-black"></div>
            <img src={View} alt="view" />
            <img src={SmallView} alt="view" />
        </div>
      </div>
      <div className="cards">
        <Card/>
      </div>
    </div>
  );
};

export default MobileApp;
