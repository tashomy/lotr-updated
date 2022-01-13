import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Quote from "./Quote";

const MovieModal = (props) => {
  const character = props.characters.docs;
  let quotesMovie = [];
  const movieID = props.movieId;
  const [quote, setQuote] = useState();
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(false);
  const [sel, setSel] = useState();

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };
  useEffect(() => {
    const fetchData = async () => {
      const rawQuotes = await fetch(
        "https://the-one-api.dev/v2/movie/" + movieID + "/quote",
        {
          headers: headers,
        }
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
          setQuote(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  if (quote === undefined) {
    return <h1>Loading je li to taj</h1>;
  }

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const shuffled = quote.docs.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 5);

  const searchHandler = () => {
    if (input === "") {
      alert("Please provide a character name!");
      return;
    }

    const findChar = (arg) => {
      for (let i = 0; i < character.length; i++) {
        if (character[i].name == arg) {
          return character[i]._id;
        }
      }
    };
    setSubmit(true);
    const quoteOfChar = quote.docs.filter(
      (elem) => elem.character === findChar(input)
    );

    const shuff = quoteOfChar.sort(() => 0.5 - Math.random());
    let sele = shuff.slice(0, 5);
    setSel(sele);
  };

  return (
    <>
      <div className="backdrop"></div>
      <div className="modale">
        <Row>
          <Col>
            <Button onClick={props.onConfirm}>close</Button>
          </Col>
        </Row>
        <Row>
          <Col md={6}>{props.title}</Col>
          <Col>{props.details}</Col>
        </Row>

        <Row>
          {!submit &&
            selected.map((item, index) => {
              return (
                <Quote
                  key={index}
                  character={item.character}
                  dialog={item.dialog}
                  chars={character}
                  quotes={quote}
                />
              );
            })}
          {submit &&
            sel.map((item, index) => {
              return (
                <Quote
                  key={index}
                  character={item.character}
                  dialog={item.dialog}
                  chars={character}
                  quotes={quote}
                />
              );
            })}
        </Row>
        <Row>
          <Col className="text-center">
            <label>Search </label>
            <br></br>
            <input
              id="inputSearch"
              type="text"
              value={input}
              onChange={inputHandler}
            ></input>
            <button onClick={searchHandler}>Confirm</button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default MovieModal;
