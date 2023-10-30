import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
import { faWorm } from "@fortawesome/free-solid-svg-icons";
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { faMosquito } from "@fortawesome/free-solid-svg-icons";
import { faCow } from "@fortawesome/free-solid-svg-icons";

// this is the list of icons
const iconsList = [
  faHippo,
  faKiwiBird,
  faFrog,
  faWorm,
  faShrimp,
  faOtter,
  faMosquito,
  faCow,
];

// each icon will have to be there twice
const iconsOrder = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

//To create the class of each card, which will be from card1-1 to card4-4
const cardClass = (number) => {
  let cardClassArray = [];
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      cardClassArray.push(`card${i}-${j}`);
    }
  }
  return cardClassArray[number];
};

//reorder an array randomly
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export { iconsList, iconsOrder, cardClass, shuffle };
