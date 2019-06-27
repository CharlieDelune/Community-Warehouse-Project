import React from "react";
import "./MainTitle.css";

export class MainTitle extends React.Component {
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.props.imgUrl + ")",
      height: this.props.fullScreen ? "100vh" : "100%"
    };
    return (
      <div class="mainTitle" style={divStyle}>
        <div class="titleHolder">
          <h1 class="mainTitleH1">{this.props.title}</h1>
          <h2 class="mainTitleH2">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}
