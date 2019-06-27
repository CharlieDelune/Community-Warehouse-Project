import React from "react";
import "./CenterMiddleSection.css";

export class CenterMiddleSection extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: this.props.colorBackground ? "#04B2B2 " : "white",
      color: this.props.colorBackground ? "white " : "black",
      height: this.props.fullScreen ? "100vh" : "100%"
    };
    return (
      <div class="tableHolder" style={divStyle}>
        <div class="contentHolder">
          {this.props.children}
        </div>
      </div>
    );
  }
}
