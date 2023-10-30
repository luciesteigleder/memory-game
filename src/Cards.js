import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardClass } from "./icons";

const Card = ({ index, icon, position, handleCardClick }) => {
  const handleClick = () => {
    if (position === "back") {
      handleCardClick(index);
    }
  };

  return (
    <div
      className={`card ${cardClass(index)} ${position}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default Card;
