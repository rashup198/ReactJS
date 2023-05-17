import { Component } from "react";
import "./App.css";
import Item from "./components/Item"; 
import ItemDate from "./components/ItemDate";

function App() {
  return (
    <div>
      <Item name= "Nirma" ></Item>
      <ItemDate day="20" month="june" year="2003"></ItemDate>

      <Item name= "SurfExcel"></Item>
      <ItemDate day="22" month="July" year="1993"></ItemDate>

      <Item name= "Rin"></Item>
      <ItemDate day="21" month="March" year="2002"></ItemDate>

      <Item name= "Gadhi"></Item>
      <ItemDate day="19" month="August" year="2005"></ItemDate>
      <div className ="App">Hello Jii</div>
    </div>
  )
}

export default App;
