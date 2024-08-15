# Namaste React

# Command to run project in dev mode

- npm run start OR npm start

# Command to build project for production ready

- npm run build

# Parcel

- It create Dev build file of our application
- Also create local server
- Hot Module Replaccement (Automatically refresh page for new changes to reflect)
- Internally it is using file watching algorithm which was written in C++ language
- Faster builds because of caching mechanism
- It also perform the image optimization
- During production build it also perform file minification(File)
- Budle all required files for build
- Also compress our files, to make build size smaller (Remove whitespace, minify files)
- parcel does not doing all thigs by itself, it is taking help of different
  library internally
- Consistence Hashing
- It also does code splitting
- Differencial bundling - To support older browser, different buddle for different
  types of app
- Perform Diagnostick - Display error message in proper format
- Give option to host app on HTTPS
- Tree Shaking Algo - It will remove unused code
- It create different budle for DEV and PROD environment
- Read more details : https://parceljs.org/

# Browsers List

- https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
- https://github.com/browserslist/browserslist#query-composition

# React.createElement => Object => HTML Element (When we render)

- It is name same as HTML DOM Elemenet
- Behind the scene It will create object
- After that when we actully render react element on the dom then it becomes
  HTML Element, before rendering into DOM it will be always object not HTML Element
- const heading = React.createElement("h1", {id:"headingId"}, "Hello World");
- To create element this way is not developer friendly and alos not much redable

# ReactDom.createRoot() && render()

- It will create root for react application
- All our code will be display only inside root
- render() method takes react element as input and behind the scene convert it to HTML
  Element and then push(replace) output inside the target root element
- So if you have any code inside root(<div>) then it will be replace by react output
- const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);

# JSX

- It is javascript systex to create react element
- to create react element using React.createElement() method is not userfriendly
  and looks very complex when we have many nested element
- JSX and react both is different, JSX is not part of the react
- JSX is a convension where we can write HTML + JS code together
- JSX in not HTML in JavaScript
- JSX in not HTML but it's syntax is some what similar to HTML
- JSX is HTML like or XML like systex
- const heading = <h1 id="headingId"> Namaste React </h1>;
- Borser and JS Engine can not userstand JSX code directly, here in our application
  behind the scene parcel is doing job to transpile our JSX code make make it
  compitable to undestood by browser and JS engine
- Parcel transpiled code with the help of Bable npm lib.
- JSX transpiled before it reaches to JS Engine -> Parcel -> Babel
- When we write attribute into JSX then we have to camelCase like tabIndex, className
- https://legacy.reactjs.org/docs/jsx-in-depth.html
- https://www.codecademy.com/learn/bwa-intro-to-react/modules/react-101-jsx-u/cheatsheet
- Best tool to convert HTML to JSX : https://transform.tools/html-to-jsx

# Babel

- It transpiled our JSX code which JS Engine, Browser and React can understand
- It convert JSX code into React code
- Babel is a free and open-source JavaScript transcompiler that is mainly used
  to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines.
- https://babeljs.io/

# Code Conversion

- React.createElement() => React Element is a plain JS Object => HMTL Element when
  rendered
- JSX code => React.createElement() => React Element JS Object => HMTL Element
  when we rendered
- JSX code transpiled/compile by Babel and coverted into ReactElement with the help of
  React.createElement() where ReactElement is nothing of Plain JS Object after that
  ReactElement is converted into HTMLElement when rendered into Browser
- That is why Element created by React.createElment() and JSX Element is always same.

# Different Element Creation Syntax

# HTML

      <h1>Hello World From HTML </h1>

# JS

      <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello World From JavaScript";

        const root = document.getElementById("root");
        root.appendChild(heading);
      </script>

# React

      const heading = React.createElement("h1", {id:"headingId"}, "Hello World");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);

# JSX

      const heading = <h1 id="headingId"> Namaste React Using JSX</h1>;

# React Components

# Class Based Component - OLD Way

- This old way of writting code

# Functional Component - New Way

- 99% application todays use functional compnent ways to build react application.
- It is just a normal javascript function
- Component name must be start with Capital letter
- It is normal JS conftion which contains piece of JSX code.
- It is function that returning some piece of JSX code
- It is functiona that return React Element is called functional component

# Coding Tips

- We can write any JS code inside JSX between {}
- We can use any React Element inside another ReactElement using {}
- We can use any conponent inside another component using syntext like : <TestComponent/>
- In Functional componet JSX code block start from (...) open curley braces and ending
  at closing curley braces
- Inside JSX we can run any piece of JS code by writing between {...JS Code Here...}

# IMP

- JSX prevent cross site scripting and doing data sanitization before it
  actully executing any JS code
- So nobody can send malicious JS script to run inside your browser or app

# Code Conversion

- Reatc is JavaScript at the end of day
- Funcationa component is funtion at the end of day which return some JSX
- JSX is ReactElement at the end of day
- React.createElement is an plain JS object at the end of day
- Here we can say every thing is JavaScript at the end of day

# CSS Style

# Inline css as below

- Inline style is not preffered way
- const resturantCardStyle = {
  backgroundColor: "#f0f0f0",
  };
- <div className="res-card" style={resturantCardStyle}> </div>
- <div className="res-card" style={{backgroundColor: "#f0f0f0"}}> </div>

# External CSS same as HTML

# Props

- Props is short form of properties
- Props is something usefull information which we can pass to componet
- We can pass dynamic data to component using props
- Props is at the end of day normal argument to the function
- Passing argument or props to a function is just like passing argument to a function
- React collect all props and wrape into Object
- Props is nothing but JavaScript obejct
- When you want to pass some dynamic data to component then pass as props

# Config Driven UI

# why .map() functiona required key

- Keys are significant in React because they aid in determining whether items in a
  list have been changed, updated, or removed. This process helps React to optimize the rendering by recycling existing DOM elements
- React don't recommended to use OOTB index value of map function
- if you have unique id attribute in your your data always use that, if don't have in that
  case use index attribute value of map(element, index ) function
- Not using any keys is not acceptable, always use the key attribute of map()
- unique key is best, if your data don't have unique kay use index attribute value

# React Project File Structure

- https://legacy.reactjs.org/docs/faq-structure.html

# Some Coding convetsion

- Component name always start with Capital Letter
- Always export component before you import anywhere in any file
- Always write all contant in capital latters separated by undesrcore when multiword
- It is not required to write file extention ".js" while we import component
  inside another file
- For component file you can user either ".js" or ".jsx" as file extention
- There is no any significant difference about both
- React by default treat imported file as ".js", hence below both import is valid.
- import Header from "./components/Header"; OR
- import Header from "./components/Header.js"
- Never keep any hard coded data into your component file.
- Never create useState variable inside condition like if else otherwise it will create
  inconsistency in your program.
- Never create useState variable inside for loop.
- Don't create useState variable inside pure JS function also.
- Alway write useState statment on genining os component code. bcz JS is
  single threaded synchronuous language so it will run your code line by line.

# Two types of export and import

- Default export - eport default Header

  - use this only when you want to export only single things from a file
  - Inside one file we can have only one export default <> statement.
  - If you write multiple export default it will give error.
  - Ex. export default Header

- Named export

  - Use this apporach when we need to export multiple things from single file.
  - Ex. export const CDN_URL = "cdn url";
  - Ex. export const LOGO_URL = "logo url";

- Default Import

  - for default import we don't need {} arround the name.
  - you can use default import like below
  - import Header from "./components/Header";

- Named Import

  - For named import we have to user {} arround the name like blelow
  - import { CDN_URL } from "../utils/constant";

- Default export import example

  - export default Component;
  - import Component from "path";

- Named export import example

  - export const Component/variable
  - import {Component/varibale} from "path";

# React Hooks

- It is nothing but plain JS utility function which is given to us by react
- Below is two very import hooks

# useState() - To create super powerfull state variable in React

- state variable keeps UI in synch with data layer
- Whenever a state variable value is update react will re-render the component
- React will re-render component in superfast as well as in optimal way
- React is very good in DOM Manipulation and re-rendering of component

# useEffect()

- useEffect hooks callback function is called after component render.
- every time when componet is render after render cycle useEffect will called.
- If you have to do something after the component render then you should write
  that code inside useEffect.
- As soon as the render cycle of functiona component is complete then it will
  called the callback function which we have write inside useEffect() hooks
- useEffect needs two argument 1. callback function 2. Dependency Array second arg is
  not mandatory.
- If second argument is not pass then useEffect will be called after every
  rendering of that component where useEffect is written.
- if second argrument is pass as [] empty depenecy array then useEffect will be called
  only one time during initial render.
- The default behaviour of useEffect is to called after every render but when we
  pass second argument it will called only one time.
- If we pass depedency array value like [btnName] then useEffect will be
  called everytime when "btnName" value is updated.
- When value of state variable is changed by calling setXX() method it will
  trigger reReconciliation algo and then perform re-render of the component UI.

# Virtual DOM

- This is representation of actual DOM
- This is nuthing but a normal JS variable (It is object)
- In React 16 new algorithm is came out to update the DOM and that algo is know as
  React Fiber
- When something is change in UI it call Reconciliation
- React Fiber is a new way of finding difference and updating the DOM
- Vistual DOM is represetion of actual HTML DOM as form of JS Object.

# Why react is faster

- Because it used Virtual DOM concept
- It has diff algorithm which is very efficiently, It can do very efficient
  DOM maniputaion
- Diff algo find the diff and update the DOM.

# React Fiber Alog more details

- https://github.com/acdlite/react-fiber-architecture

# Shimmer UI

- https://medium.com/lattice-what-is/shimmer-ui-a-better-way-to-show-loading-states-aa1f4e563d17

# React Router

- npm install react-router-dom
- import { createBrowserRouter, RouterProvider } from "react-router-dom";
- createBrowserRouter will create routing configuration for us.
- RouterProvide will actully provide routing configuration to our application
- Using useRouteeError hooks we can get more details about the error.
- Outlet : This outlet will be filled with the children according to the path
  on what page we are currently. whenever i am on the path "/contact" then
  <Contact /> component will be filled at <Outlet /> placeholder. So Outlet
  place holder will be replace by actual componet according to current path.
- Link component is a super poer given by react-router-dom by wusing that We
  can navigate to another page without reloading whole page.
- If you use tradition <a> anchor tag it will reload whole page. so don't use it.
- <a> tag refresh whole page while <Link> only refresh/replace the component according
  to current page url that is why React is know as single page application.
- Behind the scene <Link> component is using <a> acnhor tag only. <Link> is a
  wrapper over <a> and react router dom keep track that particular url is a link
  and for that we don't have to refresh the page. it is special type of link.
- More info : https://reactrouter.com/en/main/routers/create-browser-router

# 2 types of Routing in web app

- Cline Side Routing -we are not making any network call bcz all componet are already
  loaded in our app whenever I click on the link it just load the componet

- Server Side Routing - when we click on <a> tag it make network call and the page
  data comming from the server that is nothing but server side routing.

# Why react know as single page application

- Because this behave like single page. when we navigate to other page it don't refresh
  the whole page but just load the comoponet according to path by using the client side
  routing. it also don't make network call for routing from one page to another page.

# Class Based Component

- It is an older way of creating component inside react.
- It is normal javascript class
- Below line instruct that this class is React Component
- class UserClass extends React.Component {}
- extends React.Component makes react to instruct that this class is Component,
  hence react will start tracking of this class component.
- Every class based component have render() method which return some piece of JSX which
  will be displayed on page.
- Functional component is basically a function which return some piece of JSX while A
  class based component is a Class which extends React.Component and it has render()
  method which return some piece of JSX code.
- There are two import things that must be used related to props in class base
  1. Always create contructor and inside that call super(props)
  2. use {this.props.nameOfProps} to access props anywhere inside your class
- Whenever new instance of class is created the contructor will be called automatically
- There are many question related to class component are being ask by interrviewer.
- When you are rendering your functional conponent on page it means you are mounting or
  or calling or invoking, loading that functional component
- When I say I am Loading your class based component it means you are creating
  new instance of that class based component.
- When new instance of class is called it automatically called the constructor hence
  contrcutor is the best place to recive props as well as to create state variable.

# Class Based component lifecycle method

- In class based component first constructor is called then render() method is call
- componentDidMount() - When any class load first constructor is called then render()
  method is called then componentDidMount() is called. This is nothing but mouting
  cycle which is also know as lifecycle of react class based component.

- componentDidMount() is called when component alreayd mouted to the DOM or Page.
- When you have called Child component from Another Parent component the lifecycle
  method will be called on following order.

  1. Parent Contructor....
  2. Parent Render()
  3. Child Constructor...
  4. Child Render()
  5. Child componentDidMount()
  6. Parent componentDidMount()

- When you have one parent and you call child component multiple time from parent
  than lifecycle method will be call on following order

  1. Parent Contructor....
  2. Parent Render()
  3. First Child Constructor...
  4. First Child Render()
  5. Second Child Constructor...
  6. Second Child Render()
  7. First Child componentDidMount()
  8. Second Child componentDidMount()
  9. Parent componentDidMount()

- componentDidMount() will call after the render()
- componentWillUnmount() will be call when you navigate to other page from
  the current page component in which you have write componentWillUnmount(). Here we have this methon in child component of About us page so when you navigate to other
  page like contact us from about us then it will call componentWillUnmount() method
  of About us page.
- componentWillUnmount() is call just before the componet came out of the UI

# What should we write in componentWillUnmount() method

- cleanup code
- it will called when you are leaving the page
- There are lots of things which should be clear when you leave particular page
- setInterval() concept
- When we are navigating page it is not refresh the whole page but only change the
  component without whole page refresh.

# Imp link to understand component lifecycle

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Note

- When you are rendering your functional conponent on page it means you are mounting or
  or calling or invoking, loading that functional component

- When I say I am Loading your class based component it means you are creating
  new instance of that class based component.

- Mounting means showing component on to the page UI.
- Unmounting means removing component on from the page UI.

# Namaste Food Project Outline

- Header
- - Logo
- - Nav Items
-
- Body
- - Serch
- - Resturant Container
-     - Resturant Card
-        - Image
-        - Name of Resturant
-        - cuisine
-        - Star Reting
-        - Estimated time of delivery
- - Footer
-     - Copyright
-     - Links
-     - Address
-     - Contact
