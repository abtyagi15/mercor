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
import Data from "../../Data";
import Card from "../../components/Card";


const MobileApp = () => {
    const cards = Data.cards;
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-[46px] leading-[55.67px] font-medium text-[#0D062D]">Mobile App</span>
          <span className="w-[25px] h-[25px] bg-[#5030E5] bg-opacity-20 flex items-center justify-center rounded-lg">
            <img src={RenameTitleIcon} alt="title rename button" className="w-[12.51px] h-[12.51px]" />
          </span>
          <span className="w-[25px] h-[25px] bg-[#5030E5] bg-opacity-20 rounded-lg flex items-center justify-center" >
            <img src={LinkCopyIcon} alt="button for copying"  className="w-[12.51px] h-[12.51px]"/>
          </span>
        </div>
        <div className="flex items-center">
          <img src={AddInviteBtn} alt="Add invite button" className="w-[18px] h-[18px]" />
          <p className="text-[16px] font-medium leading-[19.36px] text-[#5030E5]" >Invite</p>
          <div className="flex">
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
            <img src={Users} alt="active user" />
            <div className="rounded-full text-[15px] leading-[18.15px]  font-medium text-[#D25B68] w-[38px] h-[38px] border-box border
                             border-[#FFFFFF] bg-[#F4D7DA] flex items-center justify-center"
            >+2</div>
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
      <div className="flex">
        {cards.map((cards)=>(
            <Card cards={cards} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MobileApp;
