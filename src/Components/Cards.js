import CardSides from "./cardSides/CardSides";
import { cardClass } from "./icons";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

const CardsContainer = ({
  index, //these are what we get from the parent component
  // icon,
  cardContent,
  whatToDoWhenCardIsClicked_cardContainerEdition,
}) => {
  const [isCardReturned, setIsCardReturned] = useState(false);

  const whatToDoWhenCardIsClicked_here = (index) => {
    // console.log("card Document");
    // console.log(index);
    updateThisCardReturned();
    whatToDoWhenCardIsClicked_cardContainerEdition(index, isCardReturned);

    // console.log(isCardReturned);

    //here i should put all the code I only want to have when a specific card is clicked
  };

  const updateThisCardReturned = () => {
    setIsCardReturned((v) => !v);
  };

  return (
    <div className={`cardContainer ${cardClass(index)}`}>
      <CSSTransition in={!isCardReturned} timeout={300} classNames="flip">
        <CardSides
          index={index}
          // icon={icon}
          cardContent={cardContent}
          whatToDoWhenCardIsClicked={whatToDoWhenCardIsClicked_here}
        />
      </CSSTransition>
    </div>
  );
};

export default CardsContainer;

// const CardsContainer = ({
// index,
// updateListofWhichCardIsReturned,
// }) => {
// const [isCardReturned, setIsCardReturned] = useState(false);
// const whatToDoWhenCardIsClicked_cardContainerEdition = (index) => {
// updateThisCardReturned();
// updateListofWhichCardIsReturned(index); };
// return (
// <div className={`cardContainer ${cardClass(index)}`}>
// <CardSides
// index={index}
// whatToDoWhenCardIsClicked={whatToDoWhenCardIsClicked_cardContainerEdition />
