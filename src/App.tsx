import React from "react";
import Banner from "./common/component/banner/Banner";
import Container from "./common/component/container/Container";
import Header from "./common/component/header/Header";
import Article from "./modules/feed/article/Article";

type Props = {};

const App: React.FC = ({}: Props) => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Article />
    </div>
  );
};

export default App;
