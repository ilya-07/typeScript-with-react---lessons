import React from "react";
import { useGetGlobalFeedQuery } from "../../api/repository";
import ArticleList from "../articleList/ArticleList";
import FeedToggle from "../feedTogle/FeedToggle";
import Container from "./../../../../common/component/container/Container";
type Props = {};
const Feed: React.FC = (props: Props) => {
  const { data, error, isLoading } = useGetGlobalFeedQuery();
  if (isLoading) {
    return <Container>Feed loading...</Container>;
  }
  if (error) {
    return <Container>Error while loading</Container>;
  }
  return (
    <Container>
      <FeedToggle />
      <div className="grid grid-cols-[75%_25%]">
        <ArticleList data={data?.articles} />
        <div className=" columns-2xs">ewr</div>
      </div>
    </Container>
  );
};

export default Feed;
