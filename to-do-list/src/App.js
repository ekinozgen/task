import React from "react";
import AppInfo from "./components/molecules/AppInfo";
import "./App.css";

const appTitle = "TODO LIST";
const appDescription =
  "TODO List application helps you to manage your plan. You can create or delete your work items and see what you have anytime.";

function App() {
  return (
    <div className="todo-app">
      <AppInfo title={appTitle} description={appDescription} />
      <div>
        Sign In
        <div>Title</div>
        <div>User Info</div>
        <div>Login Buttons</div>
      </div>
    </div>
  );
}

export default App;
