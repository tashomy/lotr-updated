import Header from "../components/Header/Header";
import "../styles/Home/Home.scss";
import { Container } from "react-bootstrap";
import Showcase from "../components/Home/Showcase";
import { useEffect, useState } from "react";
import Lists from "../components/Home/Lists";

const Home = (props) => {
  const arr = props.movies.docs;

  return (
    <>
      <Container fluid className="home">
        <Header />
        <Showcase movies={props.movies.total} books={props.books.total} />
      </Container>
      <Lists movies={props.movies.docs} />
    </>
  );
};

export default Home;
