import React from "react";
import "./Section.css";

const Section = ({ Icon, title, color, selected }) => {
  const style = {
    borderBottom: `3px solid ${color}`,
    color: `${selected && color}`,
  };
  return (
    <div
      className={`section d-flex align-items-center p-3  min-width-200  ${
        selected && "section--selected"
      }`}
      style={style}
    >
      <Icon />
      <h4 className="ms-1 fs-6">{title}</h4>
    </div>
  );
};

export default Section;
