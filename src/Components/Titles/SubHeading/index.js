import React from "react";
import "./style.css";

const SubHeading = ({ children }) => {
  return (
    <h2 className="font-outfit font-bold text-accent lg:text-accent lineHeight-heading text-white text-center mb-8 py-8 relative">
      {children}
      <span className="purple-border"></span>
    </h2>
  );
};

export default SubHeading;
