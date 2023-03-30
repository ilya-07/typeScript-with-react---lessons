import React from "react";
import { FaRedditAlien } from "react-icons/fa";
import { IArticle, IAuthor } from "../../api/dto/dto";
interface IProps extends IArticle {}
import { Link } from "react-router-dom";
import FButton from "../favoriteBtn/FButton";
import TagList from "../tagList/TagList";
import Container from "./../../../../common/component/container/Container";
import { DateTime } from "luxon";
const Article: React.FC<IProps> = ({
  author,
  description,
  createdAt,
  title,
  favoritesCount,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex items-center">
          <Link to={`/@${author.username}`}>
            <img src={author.image} alt="" />
          </Link>
          <div className="mr-6 ml-0.3leading-4 inline-flex flex-col ml-[15px]">
            <Link
              to={`/@${author.username}`}
              className="font-medium transition-[all_0.5s] hover:text-darkGreen underline"
            >
              {author.username}
            </Link>
            <span className="text-gray text-data">
              {/* {createdAt} */}
              {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}
            </span>
          </div>
          <FButton favoritesCount={favoritesCount} />
        </div>
        <Link className="text-black" to={"article/qwrt"}>
          <h1 className="mb-1 font-semibold text-2xl text-inherit">{title}</h1>
          <p className="text-black/40 font-light mb-1">{description}</p>
          <div className="flex justify-between">
            <span className="text-black/40 font-light text-data">
              read more...
            </span>
            <TagList tagList={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
