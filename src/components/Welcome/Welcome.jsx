import React from "react";
import "./Welcome.css";
//componente de class

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 className="theBridgeText">Hello {this.props.userProp.name + " "+ this.props.userProp.lastName} clase</h1>;
  }
}

export default Welcome;
