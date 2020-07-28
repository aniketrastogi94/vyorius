import React from "react";
import "./styles.css";
import Navbar from './navbar';
import Main from './main';
import Side from './side';
export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="con">
        <Main/>
        <Side/>
      </div>
    </div>
  );
}
