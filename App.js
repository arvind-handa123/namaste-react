import React from 'react';
import ReactDOM from 'react-dom/client';

const nestedElement = React.createElement("div", {id:"parent"},
    [
        React.createElement("div", {id:"child-1"},
            [
                React.createElement("h1", {}, "Hello World Namaste React"), 
                React.createElement("h2", {}, "I am H2 Tag")
            ]
        ),
        React.createElement("div", {id:"child-2"},
        [
            React.createElement("h1", {}, "I am H1 Tag"), 
            React.createElement("h2", {}, "I am H2 Tag")
        ]
    )  
    ]
);
console.log(nestedElement);

const heading = React.createElement("h1", { id: "heading", class: "headingClass"}, "Hello World From React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedElement);