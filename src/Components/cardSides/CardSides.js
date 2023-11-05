import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CardSides = ({
  index, // those are what we get from the cards (parent) component
  // icon,
  cardContent,
  whatToDoWhenCardIsClicked,
}) => {
  const handleClick = () => {
    whatToDoWhenCardIsClicked(index); //this function is defined in the parent component, and will then pass the index to the parent component
  };

  const giveLifeToContent = () => {
    if (cardContent.type === "picture") {
      const url = cardContent.URL;
      return <img src={url} alt="" />;
    } else if (cardContent.type === "object") {
      return <div dangerouslySetInnerHTML={{ __html: cardContent.URL }} />;
    }
  };

  // console.log(cardContent);

  return (
    <div className={`card `} id={`${index}`} onClick={handleClick}>
      <div className={`frontside ${index}`}>
        {giveLifeToContent()}

        {/* <FontAwesomeIcon icon={icon} /> */}
      </div>

      <div className={`backside ${index}`}>
        <div className="backside_background"></div>
        {/* <FontAwesomeIcon icon={icon} /> */}
      </div>
    </div>
  );
};

export default CardSides;
