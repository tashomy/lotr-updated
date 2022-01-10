import { Container } from "react-bootstrap";
import Header from "../components/Header/Header";
import MoviesShowcase from "../components/Movies/MoviesShowcase";

const Movies = (props) => {
  const movies = props.movies.docs;
  console.log(movies);
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
