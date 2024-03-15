import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const ButtonMain = ({ children, padding, onClick }) => {
  const buttonClasses = classNames("custom-button", {
    "px-6 py-3": padding === "default",
    "px-4 py-2": padding === "small",
    "px-8 py-4": padding === "large",
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonMain.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(["default", "small", "large"]),
  onClick: PropTypes.func,
};

ButtonMain.defaultProps = {
  padding: "default",
  onClick: () => {},
};

export default ButtonMain;
