import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testId="minus-button"
          onClick={() => setCount(count - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testId="plus-button"
          onClick={() => setCount(count + 1)}
          disabled={disabled}
        >
          +
        </button>

        <div>
          <button
            data-testId="on/off-button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
