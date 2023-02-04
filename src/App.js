import Main from "./main.js";
import './App.css';
import * as React from "react";
import Navbar from "./navbar.js";

const {useState} = React;
function App() {
    // const [counter, setCounter] = useState(0);
  return (
    <div className={'container'}>

      {/*<h1>hello world</h1>*/}
      {/*  <p> {counter}</p>*/}
      {/*  <button onClick = {()=> setCounter(counter + 1)}>increase the counter by 1</button>*/}
      {/*  <navbar/>*/}
        <Navbar />
        <Main />

    </div> //jsx element
  );
}

export default App;
