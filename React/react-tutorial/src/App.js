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

  const [myVar, setMyVar] = useState(name);

  const changeEvent = () => {
    setMyVar("Chandika Sameera");
    console.log(myVar);
  };

  return (
    <div className="flex-col items-center justify-center">
      <nav class="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Test
            </span>
          </a>
        </div>
      </nav>
      <div className="items-center justify-center hidden gap-8 p-2 font-mono text-lg font-bold text-center md:flex bg-slate-200">
        {navBlock}
      </div>

      <h1>{myVar}</h1>
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
