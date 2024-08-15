import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dymmy Name",
        location: "Dummy Location",
      },
    };
    //console.log(this.props.name + " Child Constructor...");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount()");

    const data = await fetch("https://api.github.com/users/arvind-handa123");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentWillUpdate() {
    console.log("componentWillUpdate() is called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount() is called");
  }

  render() {
    //console.log(this.props.name + " Child Render()");

    //const { name, location } = this.props;

    const { name, location, avatar_url } = this.state.userInfo;
    //debugger;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact : 8758148763</h3>
      </div>
    );
  }
}

export default UserClass;

/** Execution flow
 *
 * ***** Mounting Phase ******
 *
 * 1) construstor will call which set dumy data for state
 *
 * 2) render() will call with dummy data
 *    <HTML will render on page for few millisecond with dummy data >
 *
 * 3) componentDidMount() will be call
 *    <API call>
 *    <this.setState() We update state with new value retrived from api call>
 *
 * ***** Updating Phase *****
 *
 * 4) render() it will again call with updated state value retrive from API call
 *  <HTML will render with real value>
 *
 *
 * 5) componentDidUpdate() will call
 *
 *
 */
