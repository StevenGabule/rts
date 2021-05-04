import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <>
      <h2>{color}!</h2>
      <button onClick={onClick}>Click me!</button>
    </>
  );
};

export default Child;
