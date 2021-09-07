import React, { useState } from "react";
import "./App.css";
import { SketchPicker } from "react-color";

function App() {
  const [color, setColor] = useState("#6AC47E");
  const [hidden, setHidden] = useState(false);
  const pickerStyles = {
    default: {
      picker: {
        position: "absolute",
        bottom: "30px",
        left: "100px",
      },
    },
  };
  return (
    <div style={{ background: color }} className="App">
      <div className="container">
        {hidden && (
          <SketchPicker
            styles={pickerStyles}
            color={color}
            onChange={(updatedColor) => setColor(updatedColor.hex)}
          />
        )}

        <button onClick={() => setHidden(!hidden)}>
          {hidden ? "Close Color picker" : "Open Color picker"}
        </button>
      </div>
    </div>
  );
}

export default App;
