import { Container } from "react-bootstrap";
import Form from "../components/Contact/Form";
import Header from "../components/Header/Header";

const Contact = (props) => {
  return (
    <Container fluid className="contact">
      <Header />
      <Form />
    </Container>
  );
};

export default Contact;
