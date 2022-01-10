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
  return (
    <Container fluid id="lists">
      <Row>
        <Col className="text-center mt-3">
          <h2>{props.movies[0].name}</h2>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center mt-3">
        <Col md={3}>
          <Card src={towers} title={props.movies[5].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={fellow} title={props.movies[6].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={returnKing} title={props.movies[7].name}></Card>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <h2>{props.movies[1].name}</h2>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center mt-3 mb-3">
        <Col md={3}>
          <Card src={unexpected} title={props.movies[2].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={desolation} title={props.movies[3].name}></Card>
        </Col>
        <Col md={3}>
          <Card src={battle} title={props.movies[4].name}></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Lists;
