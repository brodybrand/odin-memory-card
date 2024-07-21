import { useState } from "react";

import Card from "./components/card";
import cardData from "./data";

import "./App.css";

function App() {
  const [selected, setSelected] = useState([]);

  // available cards change onClick in Card component
  const allAvailableCards = Object.fromEntries(
    Object.entries(cardData).filter((card) => !selected.includes(card[1].id))
  );

  return (
    <>
      <div className="card-display-wrapper">
        {Object.keys(cardData).map((card) => (
          <Card
            key={cardData[card].id}
            props={cardData[card]}
            isSelected={false}
            onClick={() => {
              setSelected([...selected, cardData[card].id]);
            }}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
