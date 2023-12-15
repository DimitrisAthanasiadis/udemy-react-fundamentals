import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);
  };

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  })

  return (
    <div className="App">
      <h2>counter app</h2>
      <button
        onClick={increment}
      >
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
