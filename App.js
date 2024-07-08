import React from "react";
import ReactDOM from "react-dom/client";

// Using React
//const heading = React.createElement("h1", {id:"headingId"}, "Hello World");

// Using JSX
const heading = <h1 id="headingId"> Namaste React Using JSX</h1>;

// Pain JS
const luckeyNumber = 112233;

// Function
const testFun = () => <h1> Namaste React From Function </h1>;

// React Element
const spanElement = <span> This is sample react element span tag</span>;

// React Element
const titleElement = (
  <h2 className="heading" tabIndex="1">
    Namaste React From JSX
    {/* Used react element inside another react element as below */}
    {spanElement}
  </h2>
);

// Functional Component
const LogoComponent = () => {
  return <h3>This is LogoComponet</h3>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading"> Namaste React Functional Component </h1>

      {console.log("This is sample console log")}

      {/*Use JS code as below in JSX block*/}
      <h2>{luckeyNumber}</h2>

      {/*Use ReactElementas as below in JSX block*/}
      {titleElement}

      {/* Use another component as below */}
      <LogoComponent />

      {/* To call JS function inside JSX as below */}
      {testFun()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

root.render(<HeadingComponent />);
