import { useEffect, useState } from "react";
import Card from "./Card";
import data from "./data.js";
import "./App.css";

function App() {
  const [cards, setCards] = useState(data);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // at start of render, shuffle cards
  useEffect(() => {
    randomOrder();
  }, []);

  // shuffles order of cards
  function randomOrder() {
    cards.sort(() => Math.random() - 0.5);
  }

  // reset game: clear selected cards, reset score, shuffle cards
  function resetGame() {
    setSelected([]);
    setScore(0);
    randomOrder();
  }

  // logic for handling card clicks
  function clickCard(id) {
    // reset game if card has already been selected
    if (selected.includes(id)) {
      resetGame();
    // add to score and continue game if card has not been selected
    } else {
      setSelected((prevState) => [...prevState, id]);
      setScore((prevState) => prevState + 1);
      if (score >= highScore) {
        setHighScore(score + 1);
      }
      randomOrder();
    }
  }

  let cardList = cards.map((card) => {
    return <Card key={card.id} clickCard={clickCard} card={card} />;
  });

  return (
    <div className='App'>
      <div className='App--header'>
        <h1>Programming Memory Game</h1>
        <h3>Click on a different card every time to score!</h3>
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
