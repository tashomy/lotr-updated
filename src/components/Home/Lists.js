import React, { useEffect, useState } from "react";
import towers from "../../images/2towers.jpg";
import fellow from "../../images/fellow2.jpg";
import returnKing from "../../images/return2.jpg";
import unexpected from "../../images/unexpected.jpg";
import desolation from "../../images/desolation.jpg";
import battle from "../../images/battle.jpg";
import Card from "../UI/Card";

import { Row, Col, Container } from "react-bootstrap";

const Lists = (props) => {
  const movies = props.movies;
  if (movies === undefined) {
    console.log("loading lists");
    return <p>Loading lists...</p>;
  }

  console.log(movies);
  return (
    <Container fluid id="lists">
      <Row>
        <Col className="text-center mt-3">
          <h2>{movies[0].name}</h2>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center mt-3">
        <Col md={3}>
          <Card src={towers} title={movies[5].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={fellow} title={movies[6].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={returnKing} title={movies[7].name}></Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <h2>{movies[1].name}</h2>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center mt-3 mb-3">
        <Col md={3}>
          <Card src={unexpected} title={movies[2].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={desolation} title={movies[3].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={battle} title={movies[4].name}></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Lists;
