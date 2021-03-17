import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Kullanıcı from "./components/Kullanıcı";
import "./App.css";
function titles() {
  console.log("tıklandı");
}
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="KULLANICI GİRİŞİ" />
        <hr />
        <Kullanıcı
          name="ekin"
          surname="özgen"
          city="istanbul"
          onClick={titles}
        />
      </div>
    );
  }
}

export default App;
