import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <div>
        <h1>hello sameera</h1>
      </div>
      <Main />

      <Main>
        <h5>Override Main Component //child</h5>
      </Main>

      <Main name="chandika" uni="nsbm" />
      <Main name="sakuja" uni="uoj" />
    </>
  );
}

export default App;
