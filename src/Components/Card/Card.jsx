import Icon from "../Icon/Icon";
import "./card.css";


function Card({ gameEnd, player, onPlay, index }) {
  let icon = <Icon name="pen" />; // Default icon should be FaPen
  if (player === "X") {
    icon = <Icon name="cross" />;
  } else if (player === "O") {
    icon = <Icon name="circle" />;
  }

  return (
    <div className="card" onClick={() => !gameEnd &&  onPlay(index)}>
      {icon}
    </div>
  );
}

export default Card;
