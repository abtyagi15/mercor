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
    <div className="w-[250px]">
      <div>
        <Link to="/">
          <img src={Home} alt="home" />
          <p>Home</p>
        </Link>
        <Link to="/messages">
          <img src={Messages} alt="home" />
          <p>Messages</p>
        </Link>
        <Link to="/tasks">
          <img src={Tasks} alt="home" />
          <p>Tasks</p>
        </Link>
        <Link to="/members">
          <img src={Members} alt="home" />
          <p>Members</p>
        </Link>
        <Link to="/settings">
          <img src={Settings} alt="home" />
          <p>Settings</p>
        </Link>
      </div>
      <div className="border border-black w-[224px]"></div>
      <div className="myProject-container">
        <div className="flex items-center">
           MY PROJECTS 
           <img src={AddMoreButton} alt="add more"  className="w-[13px] h-[13px]" />
        </div>
        <div>
          <Link to="/mobile-apps" className="flex items-center">
            <div className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></div>
            <p>Mobile Apps</p>
          </Link>
          <Link to="/website-redign" className="flex items-center">
            <div className="bg-[#FFA500] rounded-full w-[8px] h-[8px]"></div>
            <p>Website Redesign</p>
          </Link>
          <Link to="/design-system" className="flex items-center">
            <div className="bg-[#E4CCFD] rounded-full w-[8px] h-[8px]"></div>
            <p>Design System</p>
          </Link>
          <Link to="/wireframes" className="flex items-center">
            <div className="bg-[#7AC555] rounded-full w-[8px] h-[8px]"></div>
            <p>Wireframes</p>
          </Link>
        </div>
        <div className="bg-[#C4C4C4]">
            <div>
                <img src={BulbOn} alt="glowing bulb" />
            </div>
            <div>
                <div>Thoughts Time</div>
                <p>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
                <div className="bg-white p-2">Write a message</div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;