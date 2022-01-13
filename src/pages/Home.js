import Header from "../components/Header/Header";
import "../styles/Home/Home.scss";
import { Container } from "react-bootstrap";
import Showcase from "../components/Home/Showcase";
import { useEffect, useState } from "react";
import Lists from "../components/Home/Lists";

const Home = (props) => {
  const movies = props.movies;
  const totalM = props.moviesTotal;
  const totalB = props.booksTotal;
  const loading = props.loading;

  if (props.loading) {
    console.log("LOADING HOME");
    return <p>Loading Home</p>;
  }

  return (
    <>
      <Container fluid className="home">
        <Header />
        <Showcase movies={totalM} books={totalB} />
      </Container>
      <Lists movies={movies} loading={loading} />
    </>
  );
};

export default Home;
