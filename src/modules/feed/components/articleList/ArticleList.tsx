import React from "react";
import { IArticle } from "../../api/dto/dto";
import Article from "../article/Article";
import Container from "./../../../../common/component/container/Container";
interface IArticleProps {
  data: IArticle[];
}

const ArticleList: React.FC<IArticleProps> = ({ data }) => {
  console.log(data);
  return (
    <Container>
      {data.map((art, i: number) => (
        <Article {...art} key={i} />
      ))}
    </Container>
  );
};

export default ArticleList;
