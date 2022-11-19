import { useState } from "react";
import "./styles.css";
import Webcam from "./webcam";

function App() {
  const [info, setInfo] = useState([{}]);

  return (
    <div>
      <Webcam />
    </div>
  );
}

export default App;
