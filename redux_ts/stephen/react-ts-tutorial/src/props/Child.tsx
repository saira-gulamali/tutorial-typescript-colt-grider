import React from "react";

interface ChildProps {
  color: string;
  handleClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, handleClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={handleClick}>Click Me</button>
      {children}
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  handleClick,
  children,
}) => {
  return (
    <div>
      {color}
      <button onClick={handleClick}>Click Me</button>
      {children}
    </div>
  );
};
