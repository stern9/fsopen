import "./App.css";
import Hello from "./Hello.js";

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
