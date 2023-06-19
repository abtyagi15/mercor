import React from "react";
import AddInviteBtn from "../assests/add-invite.png";
import SubCard from "./SubCard";

const Card = ({ cards }) => {
  const subCards = cards.subCards;
  return (
    <div className="max-w-[354px] bg-[#F5F5F5] rounded-[16px]">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center">
          <div className="bg-[#5030E5] rounded-full w-[8px] h-[8px]"></div>
          <p className="text-[#0D062D]">{cards.cardType}</p>
          <div className="bg-[#E0E0E0] rounded-full w-[20px] h-[20px] flex items-center justify-center text-[12px]">
            {cards.numberOfCards}
          </div>
        </div>
        <div className="flex flex-col">
          <p>...</p>
          <img src={AddInviteBtn} alt="add invite" />
        </div>
      </div>
      <div className="bg-[#800080] stroke-[#800080] stroke-[3px] w-[314px] h-[1px] mx-auto"></div>
      <div>
        {subCards.map((subCards) => (
          <SubCard subCards={subCards} />
        ))}
      </div>
    </div>
  );
};

export default Card;
