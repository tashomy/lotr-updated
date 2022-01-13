import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import useHttp from "./hooks/useHttp";

const headers = {
  Accept: "application/json",
  Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
};
const movieUrl = "https://the-one-api.dev/v2/movie";
const bookUrl = "https://the-one-api.dev/v2/book";
const movieConfigData = { url: movieUrl, headers: headers };
const bookConfigData = { url: bookUrl };

function App() {
  const [movies, setMovies] = useState();
  const [books, setBooks] = useState();
  const [totalMovies, setTotalMovies] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const { isLoading, error, getData } = useHttp();

  useEffect(() => {
    const transformBooks = (dataObj, total) => {
      const loadedBooks = [];
      for (const key in dataObj) {
        loadedBooks.push({
          id: dataObj[key]._id,
          name: dataObj[key].name,
        });
      }
      setBooks(loadedBooks);
      setTotalBooks(total);
    };

    const transformMovies = (dataObj, total) => {
      const loadedMovies = [];

      for (const key in dataObj) {
        loadedMovies.push({
          id: dataObj[key]._id,
          name: dataObj[key].name,
          runtimeInMinutes: dataObj[key].runtimeInMinutes,
          rottenTomatoesScore: dataObj[key].rottenTomatoesScore,
          budgetInMillions: dataObj[key].budgetInMillions,
          academyAwardNominations: dataObj[key].academyAwardNominations,
          academyAwardWins: dataObj[key].academyAwardWins,
          boxOfficeRevenueInMillions: dataObj[key].boxOfficeRevenueInMillions,
        });
      }
      setTotalMovies(total);
      setMovies(loadedMovies);
    };

    getData(movieConfigData, transformMovies);
    getData(bookConfigData, transformBooks);
  }, [getData]);

  console.log(movies, totalMovies, books, totalBooks, isLoading);

  if (isLoading) {
    return <p>Loading App</p>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                movies={movies}
                moviesTotal={totalMovies}
                booksTotal={totalBooks}
                loading={isLoading}
              />
            }
          ></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
          <Route
            exact
            path="/movies"
            element={<Movies movies={movies} loading={isLoading} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
