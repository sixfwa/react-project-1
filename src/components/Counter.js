import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter a Number"
        onChange={(e) => {
          console.log(value);
          setValue(parseInt(e.target.value || 0));
        }}
      />
      <button className="button" onClick={() => setCount(count - value)}>
        {" "}
        -{" "}
      </button>

      <div className="count">{count}</div>
      <button className="button" onClick={() => setCount(count + value)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
