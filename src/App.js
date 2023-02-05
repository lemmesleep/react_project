
import * as React from "react";
import Introduction from "./introduction.js";
import Navbar from "./navbar.js";
import About from "./About.js";

function App() {
    // const [counter, setCounter] = useState(0);
  return (
    <div className={'container'}>

      {/*<h1>hello world</h1>*/}
      {/*  <p> {counter}</p>*/}
      {/*  <button onClick = {()=> setCounter(counter + 1)}>increase the counter by 1</button>*/}
      {/*  <navbar/>*/}
        <Navbar />
        <Introduction />
        <About/>

    </div> //jsx element
  );
}

export default App;
