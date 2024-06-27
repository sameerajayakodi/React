import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";
import { myData, navItems } from "./Data/Mydata";
// import myData from "./Data/Mydata";

let myvar = "Sameera Jayakdoi";

const changeEvent = () => {
  myvar = "Chandika Sameera";
  console.log(myvar);
};

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
  return (
    <div className="items-center justify-center flex-col">
      <div className=" hidden md:flex font-bold font-mono text-lg gap-8 bg-slate-200 p-2  text-center justify-center items-center ">
        {navBlock}
      </div>

      <h2>Sameera Jayakodi</h2>
      {/* <Main />
      <Main>This is child component</Main> */}
      {/* {mainBlock} */}

      {/* <NewBlock /> */}

      <div className="  max-w-screen grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {mainblock}
      </div>

      <div>
        <button className=" ml-7 flex items-center justify-center bg-blue-500 text-white py-1 px-2 rounded-xl hover:bg-blue-800 ">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
