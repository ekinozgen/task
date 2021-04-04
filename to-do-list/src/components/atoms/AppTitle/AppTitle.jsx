import React from "react";
import "./AppTitle.css";

function AppTitle(props) {
  const { title } = props;

  return <strong className="app-title">{title}</strong>;
}

export default AppTitle;
