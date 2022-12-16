import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        Open source code by{" "}
        <a href="https://github.com/StefanieBaeuchler/weather-app-react">
          {" "}
          Stefanie Bäuchler
        </a>
      </p>
    </div>
  );
}

export default App;
