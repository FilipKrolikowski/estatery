import { useState } from "react";
import { LikeButton } from "@/components";
import { HouseTileType } from "@/types/houseTile";
import styles from "@/styles/HouseTile.module.css";
import Star from "@/images/Star.svg";
import Image from "next/image";

const HouseTile = ({
  house,
  showLikeButton = true,
  showType = true,
}: {
  house: HouseTileType;
  showLikeButton?: boolean;
  showType?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div
      className={`border border-[#EAECF4] rounded-lg relative shrink-0 ${
        showLikeButton ? "hover:shadow-lg cursor-pointer" : ""
      }`}
    >
      <Image src={house.image} alt={house.name} />
      {showType && (
        <span className="uppercase bg-[#7065F0] text-white p-2 rounded-md text-xs flex w-fit gap-2 font-bold absolute -left-2 top-[185px]">
          <span className={`left-0 top-[28.5px] absolute bg-[#7065F0] ${styles.houseTileTriangle}`}></span>
          <Image src={Star} alt="star" />
          {house.type}
        </span>
      )}
      <div className="p-6 bg-white">
        <div className="flex items-center">
          <div>
            <span className="text-primary-violet text-2xl leading-[150%] font-extrabold">${house.price}</span>
            <span className="font-medium text-[#8b8b93]"> /month</span>
          </div>
          {showLikeButton && (
            <span className="ml-auto">
              <LikeButton isLiked={isLiked} onClick={() => setIsLiked(!isLiked)} />
            </span>
          )}
        </div>
        <div className="font-bold text-2xl mt-2">{house.name}</div>
        <div className="font-medium text-[#8b8b93] mt-2">{house.adress}</div>
      </div>
    </div>
  );
};

export default HouseTile;
