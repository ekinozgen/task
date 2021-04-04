import React from "react";
import AppTitle from "./../atoms/AppTitle/AppTitle";
import AppDescription from "./../atoms/AppDescription/AppDescription";
import "./AppInfo.css";

function AppInfo(props) {
  const { title, description } = props;

  return (
    <div className="app-info">
      <div className="app-info--center">
        <AppTitle title={title} />
        <AppDescription description={description} />
      </div>
    </div>
  );
}

export default AppInfo;
