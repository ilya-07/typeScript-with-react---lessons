import React from "react";
import { FaRedditAlien } from "react-icons/fa";
interface IProps {}
import { Link } from "react-router-dom";
import Container from "../../../common/component/container/Container";
import FButton from "../favoriteBtn/FButton";
const Article: React.FC<IProps> = (props) => {
  return (
    <article>
      <Container>
        <div className="border-t border-black/10 py-6">
          <div className="mb-4 font-light flex items-center">
            <Link to={"/@profile"}>
              <FaRedditAlien className="text-blue-300 text-[40px] inline-block" />
            </Link>
            <div className="mr-6 ml-0.3leading-4 inline-flex flex-col ml-[15px]">
              <Link
                to={"/@profile"}
                className="font-medium transition-[all_0.5s] hover:text-darkGreen underline"
              >
                Adam Smith
              </Link>
              <span className="text-gray text-data">02.08.2022</span>
            </div>
            <FButton />
          </div>
        </div>
      </Container>
    </article>
  );
};

export default Article;
