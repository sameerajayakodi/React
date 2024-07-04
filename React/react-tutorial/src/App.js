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

const navBlock = navItems?.map(({ label, index }) => {
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

  const changeEvent = () => {
    setMyVar({
      ...myVar,
      name: "Sameera Sameera",
    });

    setMyDataState([
      ...myDataState,
      {
        id: "4",
        name: "Bob Brown",
        university: "Stanford",
        age: 35,
        image:
          "https://images.unsplash.com/photo-1552666262-1f35b9080e83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGltYWdlfGVufDB8MHwwfHx8MA%3D%3D",
        city: "Palo Alto",
      },
    ]);

    console.log(myVar);
  };

  return (
    <div className="flex-col items-center justify-center">
      <div className="items-center justify-center hidden gap-8 p-2 font-mono text-lg font-bold text-center md:flex bg-slate-200">
        {navBlock}
      </div>

      <h1>{myVar.name}</h1>
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
    </div>
  );
}

export default App;
