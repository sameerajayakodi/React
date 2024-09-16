import "./App.css";
import ArrayFilter from "./ArrayFilter";
import ArrayFind from "./ArrayFind";
import ArrayForEach from "./ArrayForEach";
import ArrayMap from "./ArrayMap";
import ArrayReduce from "./ArrayReduce";
const myArray = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emma",
  "Fiona",
  "George",
  "Hannah",
  "Ivy",
  "Jack",
  "Katherine",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quincy",
  "Rachel",
  "Samuel",
  "Tina",
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArrayMap nameList={myArray} />
        <ArrayFilter nameList={myArray} />
        <ArrayReduce numberList={numbers} />
        <ArrayForEach nameList={myArray} />
        <ArrayFind nameList={myArray} numberList={numbers} />
      </header>
    </div>
  );
}

export default App;
