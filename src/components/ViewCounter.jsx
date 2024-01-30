import React from "react";
import { useSelector } from "react-redux";

function ViewCounter() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  return (
    <div className>
      <p>{counter}</p>
    </div>
  );
}

export default ViewCounter;
