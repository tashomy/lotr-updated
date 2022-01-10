import { Row, Col } from "react-bootstrap";

const Showcase = (props) => {
  return (
    <div className="showcase">
      <Row className="justify-content-around align-items-center text-center">
        <Col md={4}>
          <p>{props.movies}</p>
          <h1>Available movies</h1>
        </Col>
        <Col md={4}>
          <p>{props.books}</p>
          <h1>Available books</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Showcase;
