import React, { useState, useMemo } from "react";

export const Usememoprac = () => {
  const [item, setItem] = useState(10);
  const [count, setCount] = useState(0);
  const multicountMemo = useMemo(() => {
    console.log("he");
    return count;
  }, [count]);
  return (
    <>
      {" "}
      <div> UseMemo Hook in react</div>
      <h2>{count}</h2>
      <h2>{item}</h2>
      {multicountMemo}
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item + 1)}>Update Item</button>
      =====================================
      <br />
    </>
  );
};
