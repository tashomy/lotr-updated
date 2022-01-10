import { Row, Col } from "react-bootstrap";

const Quote = (props) => {
  const findChar = (arg) => {
    for (let i = 0; i < props.chars.length; i++) {
      if (props.chars[i]._id == arg) {
        return props.chars[i].name;
      }
    }
  };

  return (
    <>
      <Row className="quote">
        <Col>{findChar(props.character)}</Col>
        <Col>{props.dialog}</Col>
      </Row>
    </>
  );
};

export default Quote;
