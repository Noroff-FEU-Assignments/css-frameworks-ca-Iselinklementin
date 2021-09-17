import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { device } from "../../styles/Theme";

const Wrapper = styled.div`
  background: ${(props) => props.theme.backgroundColour};
  flex-shrink: 0;
`;

const StyledContainer = styled(Container)`
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & .row:last-child {
      width: 60%;
      padding: 0;
      margin: 0;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper className="footer mt-5">
      <StyledContainer>
        <Row xs={4} className="justify-content-center justify-content-lg-start my-4 px-2">
          <Col className="text-end mx-2">
            <FontAwesomeIcon icon={faVimeoV} size="2x" />
          </Col>
          <Col className="mx-2">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Col>
        </Row>
        <Row className="my-4 px-2">
          <Col className="text-start">hello@yay.com</Col>
          <Col className="text-end">Copyright 2020</Col>
        </Row>
      </StyledContainer>
    </Wrapper>
  );
}
