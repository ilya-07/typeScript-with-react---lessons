import React from "react";

interface IContainerProps {}

const Container: React.FC<React.PropsWithChildren<IContainerProps>> = ({
  children,
}) => {
  return <div className="max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
