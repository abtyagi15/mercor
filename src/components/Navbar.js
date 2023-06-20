import React from "react";
import { Link } from "react-router-dom";
import Home from "../assests/category.png";
import Messages from "../assests/message.png";
import Tasks from "../assests/task-square.png";
import Members from "../assests/profile-2user.png";
import Settings from "../assests/setting-2.png";
import AddMoreButton from "../assests/add-square.png";
import BulbOn from "../assests/lamp-on.png";
const Navbar = () => {
  return (
    <div className="w-[250px] pl-[22px]">
      <div>
        <Link to="/home" className="flex items-center pt-[22px]">
          <img src={Home} alt="home" className="pr-[14px]" />
          <p>Home</p>
        </Link>
        <Link to="/messages" className="flex items-center pt-[22px]">
          <img src={Messages} alt="home" className="pr-[14px]" />
          <p>Messages</p>
        </Link>
        <Link to="/tasks" className="flex items-center pt-[22px]">
          <img src={Tasks} alt="home" className="pr-[14px]" />
          <p>Tasks</p>
        </Link>
        <Link to="/members" className="flex items-center pt-[22px]">
          <img src={Members} alt="home" className="pr-[14px]" />
          <p>Members</p>
        </Link>
        <Link to="/settings" className="flex items-center pt-[22px]">
          <img src={Settings} alt="home" className="pr-[14px]" />
          <p>Settings</p>
        </Link>
      </div>
      <div className="border border-[#DBDBDB] w-[224px] my-[22px] mx-auto"></div>
      <div className="myProject-container ">
        <div className="flex items-center justify-between pr-[25px]">
          MY PROJECTS
          <img
            src={AddMoreButton}
            alt="add more"
            className="w-[16px] h-[16px]"
          />
        </div>
        <div className="my-[15px]">
          <Link
            to="/"
            className="flex items-center gap-[16px] my-[15px]"
          >
            <div className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></div>
            <p>Mobile Apps</p>
          </Link>
          <Link
            to="/website-redign"
            className="flex items-center gap-[16px] my-[15px]"
          >
            <div className="bg-[#FFA500] rounded-full w-[8px] h-[8px]"></div>
            <p>Website Redesign</p>
          </Link>
          <Link
            to="/design-system"
            className="flex items-center gap-[16px] my-[15px]"
          >
            <div className="bg-[#E4CCFD] rounded-full w-[8px] h-[8px]"></div>
            <p>Design System</p>
          </Link>
          <Link
            to="/wireframes"
            className="flex items-center gap-[16px] my-[15px]"
          >
            <div className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></div>
            <p>Wireframes</p>
          </Link>
        </div>
        <div className="flex flex-col items-center relative mt-[88px] ">
          <div className="rounded-full bg-[#F5F5F5] flex items-center justify-center w-[66px] h-[66px] absolute top-[-33px] ">
            <img src={BulbOn} alt="glowing bulb" className="absolute" />
            <div className="blur-[17px] bg-[#FCD64A] bg-opacity-70 w-[33px] h-[33px]"></div>
          </div>
          <div className="flex flex-col items-center justify-center bg-[#F5F5F5] rounded-[16px] w-[206px] h-[200px] mx-[220px]">
            <div className="text-[#000000] text-[14px] leading-[17px] font-medium mt-[45px]">
              Thoughts Time
            </div>
            <p className="my-[14px] text-[#787486] text-[12px] font-normal leading-[15px] text-center mx-[20px] ">
              We don’t have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <div className="bg-white rounded-[4px] leading-[17px] text-[14px] font-medium py-[12px] my-[12px] px-[27px] ">
              Write a message
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
