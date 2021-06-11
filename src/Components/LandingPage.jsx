import React from "react";
import Navbar from "./Navbar";
import FormComponent from "./FormComponent";
import AIComponent from "./AIComponent";

function App() {
  return (
      <>
      <div className="container flex-shrink md:flex-shrink xl:flex-shrink">
      <div className="overflow-hidden bg-white z-10 flex-nowrap" style={{position:"fixed", top:"0"}} >
          <Navbar/>
          <hr/>
      </div>
      <div className="flex flex-shrink md:flex-shrink justify-self-auto mx-36 my-10 mt-32 md:flex-nowrap sm:flex-wrap">
          <div className="flex-nowrap flex-1 md:flex-nowrap sm:flex-wrap"><AIComponent/></div>
          <div className="flex-nowrap flex-1 md:flex-nowrap sm:flex-wrap"><FormComponent/></div>
      </div>
      </div>
    </>
  );
}

export default App;
