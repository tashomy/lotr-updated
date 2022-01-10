import { Row, Col } from "react-bootstrap";
import Card from "../UI/Card";
import towers from "../../images/2towers.jpg";
import fellow from "../../images/fellow2.jpg";
import returnKing from "../../images/return2.jpg";
import unexpected from "../../images/unexpected.jpg";
import desolation from "../../images/desolation.jpg";
import battle from "../../images/battle.jpg";
import rings from "../../images/fellow.jpg";
import hobbit from "../../images/showcase1.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieModal from "./MovieModal";

const images = [
  { id: 0, src: rings },
  { id: 1, src: hobbit },
  { id: 2, src: unexpected },
  { id: 3, src: desolation },
  { id: 4, src: battle },
  { id: 5, src: towers },
  { id: 6, src: fellow },
  { id: 7, src: returnKing },
];

const MoviesShowcase = (props) => {
  const [modal, setModal] = useState(null);
  const [modalId, setModalID] = useState(null);

  const clickHandler = (event) => {
    setModal(true);
    setModalID(event.target.id);
  };

  const modalHandler = () => {
    setModal(null);
  };

  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState();
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };
  useEffect(() => {
    const fetchData = async () => {
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        { headers: headers }
      )
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
          setCharacter(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  if (character === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {modal && (
        <MovieModal
          title={props.movies[modalId].name}
          movieId={props.movies[modalId]._id}
          details={`Runtime: ${props.movies[modalId].runtimeInMinutes}, score: ${props.movies[modalId].rottenTomatoesScore}`}
          onConfirm={modalHandler}
          quotes={quote}
          characters={character}
        />
      )}
      <Row>
        {props.movies.map((item, index) => {
          return (
            <Col md={6} lg={3} key={index}>
              {/* <Link to={`movie${index}`}> */}
              <Card
                onClick={clickHandler}
                id={index}
                src={images.at(index).src}
                title={item.name}
                description={`Runtime: ${item.runtimeInMinutes}, Score: ${item.rottenTomatoesScore}`}
              ></Card>
              {/* </Link> */}
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MoviesShowcase;
