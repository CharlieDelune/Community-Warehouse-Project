import React from "react";
import "./MainTitle.css";

export class MainTitle extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      height: this.props.fullScreen ? "100vh" : "100%"
    };
    return (
      <div className="mainTitle" style={divStyle}>
        <div className="titleHolder">
          <h1 className="mainTitleH1">{this.props.title}</h1>
          <h2 className="mainTitleH2">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}
