import React from "react";
import { CrudApp } from "./components/CrudApp";

import { useSelector } from "react-redux";




function App() {

  const dataState = useSelector((state)=>state)
    
  return (
    <>
      <h1>One Piece</h1>
      <CrudApp />
      <hr />
    </>
  );
}

export default App;
