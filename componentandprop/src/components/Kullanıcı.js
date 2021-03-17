import React, { Component } from "react";
import reactDom from "react-dom";

class Kullanıcı extends Component {
  render() {
    return (
      <div>
        <ul>
          <li> Adı : {this.props.name} </li>
          <li> Soyadı : {this.props.surname} </li>
          <li> İl : {this.props.city} </li>
          <button onClick={this.props.onClick}> tıkla </button>
        </ul>
      </div>
    );
  }
}
export default Kullanıcı;
