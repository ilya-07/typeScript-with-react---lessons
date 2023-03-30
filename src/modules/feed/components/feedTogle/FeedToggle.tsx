import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const FeedToggle: React.FC = (props: Props) => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className="bg-white border-b-2 px-3 py-1" to={"/"}>
            Global Feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
