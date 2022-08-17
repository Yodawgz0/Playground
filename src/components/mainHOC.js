import React from "react";

const MainHOC = (HeadingHOC) => {
  const newHOC = (props) => {
    return (
      <div>
        <HeadingHOC {...props} />
      </div>
    );
  };
  return newHOC;
};

export default MainHOC;
