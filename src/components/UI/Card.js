import { Container } from "react-bootstrap";

const Card = (props) => {
  return (
    <div className="card">
      <img onClick={props.onClick} id={props.id} src={props.src}></img>
      <h3 value={props.value}>{props.title}</h3>
      <p value={props.value}>{props.description}</p>
    </div>
  );
};

export default Card;
