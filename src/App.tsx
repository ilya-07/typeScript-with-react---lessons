import React from "react";
import Banner from "./common/component/banner/Banner";
import Container from "./common/component/container/Container";
import Header from "./common/component/header/Header";
import Feed from "./modules/feed/components/feed/Feed";

type Props = {};

const App: React.FC = ({}: Props) => {
  return (
    <div className="">
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};

export default App;
