import React, { useState } from "react";
import "./App.css";

function App() {
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");

  const [myData, setMyData] = useState([]);

  console.log(myData);
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
        <input
          className="button"
          type="button"
          value="Submit"
          onClick={() => {
            setMyData((pre) => {
              return [
                ...pre,
                {
                  imgUrl,
                  name,
                  city,
                  position,
                },
              ];
            });
            setImgUrl((pre) => {
              if (pre.length > 0) {
                return "";
              } else {
                return pre;
              }
            });
            setName((pre) => (pre.length > 0 ? "" : pre));
            setPosition((pre) => (pre.length > 0 ? "" : pre));
            setCity((pre) => (pre.length > 0 ? "" : pre));
          }}
        ></input>
      </div>
      <div className="main_left"></div>
    </div>
  );
}

export default App;
