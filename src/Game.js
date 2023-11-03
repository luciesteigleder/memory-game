import CardsContainer from "./Components/Cards";
import { iconsList, iconsOrder, shuffle, cardClass } from "./Components/icons";
import { React, useState, useEffect, useRef } from "react";

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
  const isInitialMount = useRef(true);
  const [cardSides, setCardSides] = useState(Array(16).fill(false));
  const [attempts, setAttemps] = useState(0);
  const [success, setSuccess] = useState(0);

  const getIndexOfCards = () => {
    let cardsToCompare = [];
    cardSides.map((element, index) => {
      if (element === true) {
        cardsToCompare.push(index);
      }
      return cardsToCompare;
    });
    return cardsToCompare;
  };

  const whatToDoWhenCardIsClicked_GameEdition = (index, isCardReturned) => {
    if (!isEventListenerActive) {
      return;
    }
    const updatedSides = [...cardSides];
    updatedSides[index] = !isCardReturned;
    setCardSides((cardSides) => updatedSides);
  };

  const compareCards = (array) => {
    const firstCard = iconsArray[array[0]].iconName;
    const secondCard = iconsArray[array[1]].iconName;
    // console.log("first card " + firstCard);
    // console.log("second card " + secondCard);

    if (firstCard === secondCard) {
      console.log("YOU WIIIIIIIIN");
      isEventListenerActive = true;
      setSuccess((success) => success + 1);
      console.log("success " + success);
      array.forEach((index) => {
        changeCardsAsDone(index);
      });
      //put them back as false in cardsides
      const updatedSides = [...cardSides];
      updatedSides[array[0]] = false;
      updatedSides[array[1]] = false;
      // console.log(updatedSides);
      setCardSides((cardSides) => updatedSides);

      // if (success === 7) {

      //   gameEnd();
      // }
      // } else {
      //   resetCardPositions(cardSides);
    } else {
      console.log("sorry, not this time");
      array.forEach((index) => {
        resetCardPositions(index);
      });
    }
    // console.log(cardSides);
  };

  const resetCardPositions = (index) => {
    setTimeout(() => {
      isEventListenerActive = true;
      unblockOtherCards(isEventListenerActive);
      const cardToTurnBack = document
        .querySelector(`.card[id="${index}"]`)
        .click();
    }, 1500);
  };

  const blockOtherCards = (isEventListenerActive) => {
    if (!isEventListenerActive) {
      for (let i = 0; i < cardSides.length; i++) {
        if (cardSides[i] === false) {
          const cardToBlock = document.querySelector(`.card[id="${i}"]`);
          cardToBlock.classList.add("blocked");
        }
      }
    }
  };

  const unblockOtherCards = (isEventListenerActive) => {
    if (isEventListenerActive) {
      for (let i = 0; i < cardSides.length; i++) {
        const cardToBlock = document.querySelector(`.card[id="${i}"]`);
        cardToBlock.classList.remove("blocked");
      }
    }
  };

  const changeCardsAsDone = (index) => {
    setTimeout(() => {
      isEventListenerActive = true;
      unblockOtherCards(isEventListenerActive);
      const cardToChangeAsDone = document.querySelector(`.card[id="${index}"]`);
      cardToChangeAsDone.className = "";
      cardToChangeAsDone.classList.add("card");
      cardToChangeAsDone.classList.add("done");
    }, 1000);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  // change the count when cardsides is updated
  useEffect(() => {
    let count = cardSides.filter(Boolean).length;

    //when there's 2 cards returned, we block the others and compare them
    if (count === 2) {
      isEventListenerActive = false;
      console.log("now!");
      blockOtherCards(isEventListenerActive);
      setAttemps((attempts) => attempts + 1);

      //we compare the two cards together
      const cardsToCompare = getIndexOfCards();
      compareCards(cardsToCompare);
    }
  }, [cardSides]);

  // successes
  useEffect(() => {
    console.log("successes: " + success);
    if (success === 8) {
      console.log("you won!");
      const game = document.querySelector("#game");
      game.style.display = "none";

      const congratMessage = document.querySelector("#success");
      congratMessage.style.display = "flex";
    }
  }, [success]);

  return (
    <>
      <section id="game">
        <div className="container">
          {/* this function will generate the 16 different cards: we create an array of 16 empty values, and iterate through it */}
          {Array.from({ length: 16 }).map((_, i) => (
            <CardsContainer
              key={i}
              index={i}
              icon={shuffledList[shuffledOrder[i]]}
              whatToDoWhenCardIsClicked_cardContainerEdition={
                whatToDoWhenCardIsClicked_GameEdition
              } //this is a function that is passed as a prop
            />
          ))}
        </div>
        <section id="otherInfos">
          <div className="infos">
            <p>Attempts: {attempts}</p>
            <p>Matchs: {success}</p>
          </div>
          <div className="startButtonD">
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

// What do I still need to do:
// transitions for cards done
// end of the game => transition of the you win message

// Nice to add: timer ?
