import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectVisible, setSelectVisible] = useState(false);

  function handleSelect() {
    setSelectVisible(!selectVisible);
  }

  return (
    <div className="full-page">
      <div className={selectVisible ? "page-with-select" : "page"}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={handleSelect} disabled={selectVisible}>
          select
        </button>
      </div>
      {selectVisible && (
        <div className="select">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            turpis nunc eget lorem dolor sed. Morbi leo urna molestie at. Sem
            nulla pharetra diam sit amet nisl suscipit. Augue eget arcu dictum
            varius duis. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Ac
            orci phasellus egestas tellus rutrum. Commodo elit at imperdiet dui
            accumsan. Rhoncus urna neque viverra justo nec ultrices. In
            fermentum et sollicitudin ac orci phasellus egestas tellus. Pharetra
            massa massa ultricies mi quis hendrerit. Feugiat in ante metus
            dictum at tempor commodo. Pulvinar etiam non quam lacus. Habitasse
            platea dictumst vestibulum rhoncus est. Felis imperdiet proin
            fermentum leo vel orci. Faucibus a pellentesque sit amet porttitor
            eget dolor morbi non. Blandit libero volutpat sed cras.
          </p>
          <button onClick={handleSelect}>selected</button>
        </div>
      )}
    </div>
  );
}
