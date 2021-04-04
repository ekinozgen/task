import React from "react";
import "./AppDescription.css";

function AppDescription(props) {
  const { description } = props;

  return <label className="app-description">{description}</label>;
}

export default AppDescription;
