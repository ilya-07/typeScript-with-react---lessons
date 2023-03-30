import React from "react";

interface IProps {
  tagList: string[];
}

const TagList: React.FC<IProps> = ({ tagList }) => {
  return (
    <ul className="font-light text-data flex gap-[10px] self-end ">
      {tagList.map((el, i: number) => (
        <li className="border border-[#ddd] px-3 rounded-[10px]">{el}</li>
      ))}
    </ul>
  );
};

export default TagList;
