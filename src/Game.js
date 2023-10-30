import Card from "./Cards";
import { iconsList, iconsOrder, shuffle } from "./icons";
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
      setCardPositions(updatedPositions, () => {
        console.log("end of the set cards as done function");
        console.log(cardPositions);
      });
    }, 500);
  };

  const compareCards = (array) => {
    const firstCard = iconsArray[array[0]].iconName;
    const secondCard = iconsArray[array[1]].iconName;

    if (firstCard === secondCard) {
      console.log("YOU WIIIIIIIIN");
      setCardsAsDone();
      isEventListenerActive = true;
    } else {
      resetCardPositions(cardPositions);
    }
  };

  useEffect(() => {
    if (frontCount === 2) {
      isEventListenerActive = false;
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

  return (
    <div className="container">
      {/* this function will generate the 16 different cards: we create an array of 16 empty values, and iterate through it */}
      {Array.from({ length: 16 }).map((_, i) => (
        <Card
          key={i}
          index={i}
          icon={shuffledList[shuffledOrder[i]]}
          position={cardPositions[i]} // pass the position as a prop to the Card component
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default Game;

// When a card is clicked, it turns
// When two card are turned:
// -	Either they have different icons, they stay turned 3 sec and then turn back
// -	If they have the same icons, there is an 3sec animation and they disappear

// So three states: back, front and disappeared.

// When there’s no cards anymore, a message: congratulations!! And a button to start again (refresh the page)

// During the whole game: a button to start again (refresh the page)
// Nice to add: timer ?

// Animation to flip the card: https://www.youtube.com/watch?v=9uwZkqoFAfg
