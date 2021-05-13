import React from "react";
import Navbar from "./Navbar";
import FormComponent from "./FormComponent";
import AIComponent from "./AIComponent";

function App() {
  return (
      <>
      <div className="overflow-hidden bg-white" style={{position:"fixed", width:"100%", top:"0"}} >
          <Navbar/>
          <hr/>
      </div>
      <div className="flex flex-auto mx-36 my-10 mt-32" >
      <AIComponent/>
      <FormComponent/>
      </div>
    </>
  );
}

export default App;
