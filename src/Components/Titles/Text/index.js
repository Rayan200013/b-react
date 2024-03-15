import React from "react";

const Paragraph = ({ children, mobileFontSize, mobileLineHeight }) => {
  const mobileFontSizeClass = mobileFontSize
    ? "text-paragraph lg:text-paragraph"
    : "";
  const mobileLineHeightClass = mobileLineHeight
    ? `leading-paragraphMobile lg:leading-paragraph`
    : "";

  return (
    <p
      className={`font-inter font-paragraph leading-paragraph text-paragraphgray ${mobileFontSizeClass} ${mobileLineHeightClass} py-5 `}
    >
      {children}
    </p>
  );
};

export default Paragraph;
