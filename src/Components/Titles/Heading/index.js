import React from "react";

const Heading = ({ children, mobileFontSize, LineHeight }) => {
  const mobileFontSizeClass = mobileFontSize
    ? `text-headingMobile lg:text-heading`
    : "";
  const mobileLineHeightClass = LineHeight
    ? `leading-headingMobile lg:leading-heading`
    : "";

  return (
    <h1
      className={`text-heading lg:text-heading font-heading leading-heading font-outfit text-heading1 mb-4 ${mobileFontSizeClass} ${mobileLineHeightClass} `}
    >
      {children}
    </h1>
  );
};

export default Heading;
