import "./App.css";
import Thumb from "./Thumb";
import { quotes as data } from "./quotes.js";

function App() {
  return (
    <div className="app">
      <p className="heading">Random Quote Generator</p>
      <Thumb />
      <p className="heading">Thank You</p>
    </div>
  );
}

export default App;
