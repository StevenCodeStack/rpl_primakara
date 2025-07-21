import React from "react";

const Title = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1
      className={`${className} font-manrope text-5xl font-semibold text-black`}
    >
      {children}
    </h1>
  );
};

export default Title;
