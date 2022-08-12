import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { incNumber, decNumber } from "../actions";

export default function ReduxTry() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  console.log(myState);
  return (
    <>
      <h1>reduxTry</h1>
      <span>{myState}</span>
      <div>
        <button onClick={() => dispatch(incNumber())}>+</button>
        <button onClick={() => dispatch(decNumber())}>-</button>
      </div>
    </>
  );
}
