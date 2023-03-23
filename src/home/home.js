import React from "react";
import Header from "../header/header";
import Side1 from "../side1/side1";
import Side2 from "../side2/side2";
import { Outlet } from "react-router-dom";
import "./home.css";

export default function home() {
  return (<div className="home">
    <div className="home_top">
      <Header/>
    </div>
    <div className="home_bottom">
      <Side1/>
      <Outlet className="outlet"/>
      <Side2/>
    </div>
    </div>
  )
      
    
    
}
