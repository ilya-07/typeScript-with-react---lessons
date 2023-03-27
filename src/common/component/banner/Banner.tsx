import React from "react";
import Container from "../container/Container";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section>
      <div className="bg-green shadow-lg p-8 text-white mb-8 text-center">
        <Container>
          <h1 className="font-bold text-[50px] mb-[10px]">CONDIT</h1>
          <p className="text-lg opacity-75">A place to share your knowladge</p>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
