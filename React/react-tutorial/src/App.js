import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/Mydata";
// import myData from "./Data/Mydata";

const mainblock = myData?.map(({ name, university, age, city, id }) => {
  return (
    <Main key={id} name={name} university={university} age={age} city={city} />
  );
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
    <>
      <Main />
      <Main>This is child component</Main>
      {/* {mainBlock} */}

      <NewBlock />
      {mainblock}
    </>
  );
}

export default App;
