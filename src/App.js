import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Alert } from "react-bootstrap";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";

function App() {
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };
  const [movies, setMovies] = useState();
  const [books, setBooks] = useState();
  useEffect(() => {
    async function getMovies() {
      const request = fetch("https://the-one-api.dev/v2/movie", {
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setMovies(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    async function getBooks() {
      const request = fetch("https://the-one-api.dev/v2/book")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setBooks(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getMovies();
    getBooks();
  }, []);

  if (movies === undefined || books === undefined) {
    return (
      <Container fluid>
        <Alert className="text-center">Loading...</Alert>
      </Container>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home movies={movies} books={books} />}
          ></Route>
          <Route exact path="/contacts" element={<Contact />}></Route>
          <Route
            exact
            path="/movies"
            element={<Movies movies={movies} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
