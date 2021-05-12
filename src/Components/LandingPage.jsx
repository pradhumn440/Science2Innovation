import React from "react";
import Navbar from "./Navbar";
import FormComponent from "./FormComponent";
import AIComponent from "./AIComponent";

function App() {
  return (
      <>
      <div>
          <Navbar />
      </div>
      <hr/>
      <div className="flex flex-auto" >
      <AIComponent/>
      <FormComponent/>
      </div>
    </>
  );
}

export default App;
