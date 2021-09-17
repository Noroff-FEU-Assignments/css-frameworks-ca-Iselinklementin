import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Component } from "react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  & .card-body {
    & .card-title {
      color: black;
    }
    & .btn-primary {
      background: linear-gradient(90deg, #e92569 85%, #767676 15%);
      border: transparent;
      transition: color 0.15s ease-in-out;
      height: 46px;
      &:hover {
        background: ${props => props.theme.primaryColour};
      }
    }
  }
`;

const StyledCol = styled(Col)`
  & .card {
    border-radius: 0.7rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    & .card-img-top {
      border-radius: 0.7rem 0.7rem 0 0;
    }
  }
`;

class Cards extends Component {
  render() {
    const imagesFirst = ["news1", "news2", "news3", "news4"];
    const imagesSecond = ["news5", "news6", "news7", "news8"];

    const CardGroupOne = imagesFirst.map(image => {
      return (
        <StyledCol>
          <StyledCard>
            <Card.Img
              variant="top"
              key={image}
              alt="card-image"
              src={require(`../../images/news-images/${image}.jpg`).default}
            />
            <Card.Body>
              <Card.Title className="my-2">Nunc porttitor vel</Card.Title>
              <Card.Text className="my-4">Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="w-100 my-3">MORE</Button>
            </Card.Body>
          </StyledCard>
        </StyledCol>
      );
    });

    const CardGroupTwo = imagesSecond.map(image => {
      return (
        <StyledCol>
          <StyledCard>
            <Card.Img
              variant="top"
              key={image}
              alt="card-image"
              src={require(`../../images/news-images/${image}.jpg`).default}
            />
            <Card.Body>
              <Card.Title className="my-2">Nunc porttitor vel</Card.Title>
              <Card.Text className="my-4">Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="w-100 my-3">MORE</Button>
            </Card.Body>
          </StyledCard>
        </StyledCol>
      );
    });

    return (
      <>
        <Row xs={1} md={2} lg={4} className="g-4">
          {CardGroupOne}
        </Row>
        <Row md={2} lg={4} className="g-4 mt-3 d-none d-md-flex">
          {CardGroupTwo}
        </Row>
      </>
    );
  }
}

export default Cards;
