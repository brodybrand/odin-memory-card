import { useState } from "react";

import Card from "./components/card";
import cardData from "./data";

import "./App.css";

function App() {
  const [selected, setSelected] = useState([]);
  const [activeCards, setActiveCards] = useState([]);

  // available cards change onClick in Card component
  const allAvailableCards = Object.fromEntries(
    Object.entries(cardData).filter((card) => !selected.includes(card[1].id))
  );
  console.log(allAvailableCards);

  const getRandomCards = (num) => {
    let keys = Object.keys(cardData);

    let randomKeysArr = [];
    const getRandomKeys = () => {
      while (randomKeysArr.length !== num) {
        let randomKey = (keys.length * Math.random()) << 0;
        console.log(`randomKey: ${randomKey}`);
        if (randomKeysArr.includes(randomKey)) {
          console.log(`dup key`);
          continue;
        } else {
          randomKeysArr.push(randomKey);
          console.log(`key arr: ${randomKeysArr}`);
        }
      }
    };
    getRandomKeys();

    let randomCards = Object.fromEntries(
      Object.entries(cardData).filter((card) =>
        randomKeysArr.includes(card[1].id)
      )
    );
    console.log(randomCards);
    return randomCards;
  };
  let testRandCards = getRandomCards(5);

  return (
    <>
      <div className="card-display-wrapper">
        {Object.keys(testRandCards).map((card) => (
          <Card
            key={testRandCards[card].id}
            props={testRandCards[card]}
            isSelected={false}
            onClick={() => {
              setSelected([...selected, testRandCards[card].id]);
            }}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default App;
