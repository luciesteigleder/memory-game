import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CardSides = ({
  index, // those are what we get from the cards (parent) component
  icon,
  whatToDoWhenCardIsClicked,
}) => {
  const handleClick = () => {
    // console.log(`card that has been clicked`);
    // console.log(index);
    whatToDoWhenCardIsClicked(index); //this function is defined in the parent component, and will then pass the index to the parent component
  };

  return (
    <div className={`card `} id={`${index}`} onClick={handleClick}>
      <div className={`backside ${index}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={`frontside ${index}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default CardSides;
