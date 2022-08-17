import React from "react";
import MainHOC from "./mainHOC";

const HeadingHOC = (props) => {
  console.log(props);
  return (
    <div>
      <h1 {...props}>Hello</h1>
    </div>
  );
};

export default MainHOC(HeadingHOC);
