import CardSides from "./Components/cardSides/CardSides";
import { iconsList, iconsOrder, shuffle } from "./Components/icons";
import { useState, useEffect } from "react";

let isEventListenerActive = true;

const shuffledList = shuffle(iconsList); //we randomize the list of icons
const shuffledOrder = shuffle(iconsOrder); //we randomize the order of icons
let iconsArray = [];

for (let i = 0; i < 16; i++) {
  iconsArray.push(shuffledList[shuffledOrder[i]]);
}
console.log("order of the cards");
console.log(iconsArray);

const Game = () => {
  const [frontCount, setFrontCount] = useState(0); // we count how many cards are turned on their front.
  const [cardPositions, setCardPositions] = useState(Array(16).fill("back")); // array to track card positions
  const [attempts, setAttemps] = useState(0);
  const [success, setSuccess] = useState(0);

  const handleCardClick = (index) => {
    if (!isEventListenerActive) {
      return;
    }
    console.log("handle click function");
    setFrontCount((prevCount) => prevCount + 1);
    updateCardPosition(index, "front");
  };

  const updateCardPosition = (index, newposition) => {
    const updatedPositions = [...cardPositions];
    updatedPositions[index] = newposition;
    setCardPositions(updatedPositions);
  };

  const getIndexOfCards = () => {
    let cardsToCompare = [];
    cardPositions.map((element, index) => {
      if (element === "front") {
        cardsToCompare.push(index);
      }
      return cardsToCompare;
    });
    return cardsToCompare;
  };

  const setCardsAsDone = () => {
    setTimeout(() => {
      const updatedPositions = [...cardPositions].map((position) => {
        if (position === "front" || position === "done") {
          return "done";
        } else {
          return "back";
        }
      });
      setCardPositions(updatedPositions);
    }, 500);
  };

  const gameEnd = () => {
    console.log("you won!");
    const game = document.querySelector("#game");
    game.style.display = "none";

    const congratMessage = document.querySelector("#success");
    congratMessage.style.display = "flex";
  };

  const compareCards = (array) => {
    const firstCard = iconsArray[array[0]].iconName;
    const secondCard = iconsArray[array[1]].iconName;

    if (firstCard === secondCard) {
      console.log("YOU WIIIIIIIIN");
      setCardsAsDone();
      isEventListenerActive = true;
      setSuccess((success) => success + 1);
      console.log("success " + success);
      if (success === 7) {
        gameEnd();
      }
    } else {
      resetCardPositions(cardPositions);
    }
  };

  useEffect(() => {
    if (frontCount === 2) {
      isEventListenerActive = false;
      setAttemps((attempts) => attempts + 1);
      setFrontCount(0);
      const cardsToCompare = getIndexOfCards();
      compareCards(cardsToCompare);
    }
  }, [frontCount]);

  const resetCardPositions = () => {
    setTimeout(() => {
      isEventListenerActive = true;
      const updatedPositions = [...cardPositions].map((position) => {
        if (position === "done") {
          return "done";
        } else if (position === "front") {
          return "back";
        } else if (position === "back") {
          return "back";
        }
      });
      setCardPositions(updatedPositions);
    }, 1000);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      <section id="game">
        <div className="container">
          {/* this function will generate the 16 different cards: we create an array of 16 empty values, and iterate through it */}
          {Array.from({ length: 16 }).map((_, i) => (
            <CardSides
              key={i}
              index={i}
              icon={shuffledList[shuffledOrder[i]]}
              position={cardPositions[i]} // pass the position as a prop to the Card component
              handleCardClick={handleCardClick}
            />
          ))}
        </div>
        <section id="otherInfos">
          <div className="infos">
            <p>attempts: {attempts}</p>
            <p>successes: {success}</p>
          </div>
          <div className="startButtonDi">
            <button className="start" onClick={refreshPage}>
              Start Again
            </button>
          </div>
        </section>
      </section>
      <section id="success">
        <p>YOU WON!</p>
        <button className="start" onClick={refreshPage}>
          Start Again
        </button>
      </section>
    </>
  );
};

export default Game;

// During the whole game:
// Nice to add: timer ?

// Animation to flip the card: https://www.youtube.com/watch?v=9uwZkqoFAfg
