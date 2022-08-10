import React, { useEffect, useState } from "react";

export const TryingComponent = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
  };
  const ErrMsg = "under 18!";

  useEffect(() => {
    setError(text < 18);
  }, [text]);

  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 1);
  console.log(4);

  return (
    <>
      <div>{text}</div>
      <input value={text} onChange={handleText} />
      {error ? ErrMsg : null}
    </>
  );
};
