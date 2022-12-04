import { useState } from "react";
import Card from "./Card";
import data from "./data.js";
import "./App.css";

function App() {
  const [cards, setCards] = useState(data);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  let cardList = cards.map((card) => {
    return <Card key={card.id} name={card.name} image={card.image} />;
  });

  return (
    <div className='App'>
      <div className='App--header'>
        <h1>Programming Memory Game</h1>
        <div className='App--stats'>
          <h2>Score: {score}</h2>
          <h2>High Score: {highScore}</h2>
        </div>
      </div>
      <div className='App--cards'>{cardList}</div>
    </div>
  );
}

export default App;
