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
        <input
          type="text"
          placeholder="Image URL"
          value={imgUrl}
          onChange={(e) => {
            e.preventDefault();
            setImgUrl(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            e.preventDefault();
            setCity(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => {
            e.preventDefault();
            setPosition(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="button" value="Submit"></input>
      </div>
      <div className="main_right"></div>
    </div>
  );
}

export default App;
