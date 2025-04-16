import { LikeButtonType } from "@/types/likeButton";
import { FaRegHeart } from "react-icons/fa";

const LikeButton = ({ isLiked, onClick }: LikeButtonType) => {
  return (
    <div
      onClick={onClick}
      className={`border p-3 rounded-full text-primary-violet border-[#EAECF4] cursor-pointer hover:bg-white hover:text-[#3D1EFE] hover:border-[#8B8AFF] focus:bg-[#d7d3fc] ${
        isLiked ? "text-white bg-[#6851FF] border-[#8B8AFF]" : ""
      }`}
    >
      <FaRegHeart size={18} />
    </div>
  );
};

export default LikeButton;
