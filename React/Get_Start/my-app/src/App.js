import "./App.css";
import Button from "./Components/Button";
import Profile from "./Components/Profile";

// let content;
// if (5 < 2) {
//   content = <Button />;
// } else {
//   content = <Profile />;
// }

export default function App() {
  return (
    <>
      <h1>Welcome To My App!</h1>

      {5 < 8 ? <Button /> : <Profile />}
      {/* {content} */}
    </>
  );
}
