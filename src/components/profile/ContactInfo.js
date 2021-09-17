import React from "react";
import { device } from "../../styles/Theme";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  @media ${device.laptop} {
    width: 400px;
    margin-top: 9.2rem;
    padding-left: 4rem;
  }
`;

export default function ContactInfo() {
  return (
    <StyledContainer>
      <Row className="my-3">
        <Col xs={1}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Col>
        <Col className="ms-3">
          <p>hello@yay.com</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={1}>
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </Col>
        <Col className="ms-3">
          <p>123 456 7890</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={1}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </Col>
        <Col className="ms-3">
          <p className="m-0">123 Some Street</p>
          <p className="m-0">Somewhere</p>
          <p className="m-0">Some City</p>
          <p className="m-0">10000</p>
        </Col>
      </Row>
    </StyledContainer>
  );
}
