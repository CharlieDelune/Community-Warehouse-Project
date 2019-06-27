import React from "react";
import "./FixedImage.css";

export class FixedImage extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      height: this.props.fullScreen ? "100vh" : "100%"
    };
    return (
      <div className="fixedImage" style={divStyle}>
        <div className="titleHolder">
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}
