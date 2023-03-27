import React from "react";
import { AiFillHeart } from "react-icons/ai";
interface Props {}

const FButton: React.FC = (props: Props) => {
  return (
    <button className="text-red-500 text-[20px]">
      <AiFillHeart />
    </button>
  );
};

export default FButton;
