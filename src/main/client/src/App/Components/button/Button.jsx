import React from "react";
import "./Button.css";

export class Button extends React.Component {
  render() {
    return (
      <a className="button" href={this.props.target || "#"}>{this.props.text}</a>
    );
  }
}
