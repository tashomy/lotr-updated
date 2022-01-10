import { Col, Container, Row, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <Container className="header">
      <Row className="justify-content-between">
        <Col md={6} className="logo">
          <div id="logo">
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </div>
        </Col>
        <Col md={6} className="navbar ">
          <Nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/movies">
                <li>Movies</li>
              </Link>
              <Link to="/contacts">
                <li>Contact</li>
              </Link>
            </ul>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
