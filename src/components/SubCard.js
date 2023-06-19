import React from "react";
import CommentIcon from "../assests/message.png";
import FileIcon from "../assests/file-icon.png";
import UserInviteIcon from "../assests/invites.png";
const SubCard = (props) => {
  const subCards = props.subCards;
  const invites = subCards.invites;
  console.log(invites);
  return (
    <div className="bg-[#FFFFFF] w-[314px] h-[177px] rounded-[16px] m-4">
      <div className="flex justify-between">
        <p className="text-[#D58D49] rounded-[4px] bg-[#DFA874] bg-opacity-20 text-medium text-[12px] w-[36px] h-[23px] flex items-center justify-center">
          {subCards.status}
        </p>
        <p className="text-[16px] font-extrabold">...</p>
      </div>
      <div className="text-[#0D062D] text-[18px] leading-[22px] font-semibold">
        {subCards.title}
      </div>
      <p className="text-[#787486] font-normal leading-[15px]">
        {subCards.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="users flex border border-[#FFFFFF] w-[24px] h-[24px] box-border">
          {invites.map((invites) => (
            <img
              src={UserInviteIcon}
              alt="user invite shows"
              key={invites.id}
            />
          ))}
        </div>
        <div className="flex ">
          <div className="flex items-center justify-center">
            <img src={CommentIcon} alt="comment icon" />
            <p>{subCards.comments}</p>
            <p>Comments</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={FileIcon} alt="file icon" />
            <p>{subCards.files}</p>
            <p>File</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
