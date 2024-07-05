import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { myData, navItems } from "./Data/Mydata";
// import myData from "./Data/Mydata";

const mainblock = myData?.map(({ name, university, age, city, id, image }) => {
  return (
    <Main
      key={id}
      name={name}
      university={university}
      age={age}
      city={city}
      image={image}
    />
  );
});

const navBlock = navItems?.map(({ label }, index) => {
  return <Nav key={index} label={label} />;
});

const NewBlock = () => {
  return myData?.map(({ name, university, age, city, id }) => {
    return (
      <Main
        key={id}
        name={name}
        university={university}
        age={age}
        city={city}
      />
    );
  });
};

// const mainBlock = myData.map(({ name, university, age, city, id }) => {
//   return (
//     <Main key={id} name={name} university={university} age={age} city={city} />
//   );
// });
function App() {
  const name = "Sameera Jayakodi";

  const [myVar, setMyVar] = useState({
    name: "Bob Brown",
    university: "Stanford",
    age: 35,
  });

  const [myDataState, setMyDataState] = useState(myData);
  const [inputVal, setInputVal] = useState(0);

  const changeEvent = () => {
    setTimeout(() => {
      console.log("I am clicked");
      setInputVal((pre) => pre + 1);
    }, 3000);

    // setMyDataState([
    //   ...myDataState,
    //   {
    //     id: "8",
    //     name: "Bob Brown Change",
    //     university: "Stanford",
    //     age: 80,
    //     image:
    //       "https://images.unsplash.com/photo-1552666262-1f35b9080e83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGltYWdlfGVufDB8MHwwfHx8MA%3D%3D",
    //     city: "Palo Alto",
    //   },
    // ]);
  };
  console.log(inputVal);
  const mainblock = myDataState?.map(
    ({ name, university, age, city, id, image }, index) => {
      return (
        <Main
          key={id + index}
          name={name}
          university={university}
          age={age}
          city={city}
          image={image}
        />
      );
    }
  );

  const inputChangeHandle = (event, data) => {
    event.preventDefault();
    console.log(data);
    setInputVal(event.target.value);
  };

  return (
    <div className="flex-col items-center justify-center">
      <div className="items-center justify-center hidden gap-8 p-2 font-mono text-lg font-bold text-center md:flex bg-slate-200">
        {navBlock}
      </div>

      <h1>{inputVal}</h1>
      {/* <Main />
      <Main>This is child component</Main> */}
      {/* {mainBlock} */}

      {/* <NewBlock /> */}

      <div className="grid gap-8 max-w-screen sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mainblock}
      </div>

      <div>
        <button
          onClick={changeEvent}
          className="flex items-center justify-center px-2 py-1 text-white bg-blue-500 ml-7 rounded-xl hover:bg-blue-800"
        >
          Click Me
        </button>
      </div>
      {/* <input
        onChange={(e) => {
          inputChangeHandle(e, inputVal);
        }}
        placeholder="type what you want"
        type="text"
        id="input"
        className="px-10 py-2 mt-2 font-mono text-2xl font-bold text-red-500 border border-gray-300 text-re "
      /> */}
    </div>
  );
}

export default App;
