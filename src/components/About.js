import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Contructor....");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount()");
  }

  render() {
    //console.log("Parent Render()");
    return (
      <div>
        <h1>Aboutus component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Arvind Handa (Class Based)"} location={"Surat"} />
      </div>
    );
  }
}

export default About;
