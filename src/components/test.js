import React from "react";
import "../css/test.css";

function ChildComponent({ onChildData }) {
  const handleClick = () => {
    const data = "Hello from child!";
    onChildData(data);
  };

  return <button onClick={handleClick}>Send Data to Parent</button>;
}

export { ChildComponent };
