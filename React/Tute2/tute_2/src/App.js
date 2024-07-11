import React, { useState } from "react";
import "./App.css";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  return (
    <div className="main_container">
      <div className="main_right">
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Position" />
        <input type="button" value="Submit"></input>
      </div>
      <div className="main_right"></div>
    </div>
  );
}

export default App;
