import { Container } from "react-bootstrap";
import Header from "../components/Header/Header";
import MoviesShowcase from "../components/Movies/MoviesShowcase";

const Movies = (props) => {
  const movies = props.movies;

  if (props.loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Container fluid className="movies">
        <Header />
        <MoviesShowcase movies={movies} />
      </Container>
    </>
  );
};

export default Movies;
