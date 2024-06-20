import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/Mydata";
// import myData from "./Data/Mydata";

function App() {
  return (
    <>
      <Main />
      <Main>This is child component</Main>
      {myData.map(({ name, university, age, city, id }) => {
        return (
          <Main
            key={id}
            name={name}
            university={university}
            age={age}
            city={city}
          />
        );
      })}
    </>
  );
}

export default App;
