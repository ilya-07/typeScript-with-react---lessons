import React from "react";
import { AiFillHeart } from "react-icons/ai";
interface IProps {
  favoritesCount: number;
}

const FButton: React.FC<IProps> = ({ favoritesCount }) => {
  return (
    <button className="text-red-500 text-[20px] flex gap-[15px] items-center bg-cyan-50 rounded-[10px] shadow-md py-2 px-4">
      <AiFillHeart />
      <span>{favoritesCount}</span>
    </button>
  );
};

export default FButton;
