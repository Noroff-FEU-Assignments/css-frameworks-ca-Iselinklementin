import React from "react";
import { Tabs, Tab, Image, Container, Row, Col } from "react-bootstrap";
import Tab1 from "../../images/tab-images/tab1.jpg";
import Tab2 from "../../images/tab-images/tab2.jpg";
import Tab3 from "../../images/tab-images/tab3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Share, { ShareIcons } from "../profile/Links";

const Wrapper = styled.div`
  & .nav-link {
    color: ${props => props.theme.primaryColour};
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    font-size: 19px;
    padding: 11px 25px 30px 20px;

    &:hover {
      border-color: transparent;
    }

    &:focus {
      border-color: transparent;
    }
  }

  & .nav {
    margin-bottom: -20px;
    line-height: 1.2;
  }

  & .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    border-color: #d1d1d1 #d1d1d1 transparent #d1d1d1;
    clip-path: polygon(0% 0, 100% 0%, 100% 85%, 0% 85%);
    height: 60px;
    border-bottom: none;
  }

  & .tab-pane {
    background: ${props => props.theme.backgroundColour};
    padding: 1rem;
    border-radius: 10px;
    border: #d1d1d1 solid 1px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    margin-top: -14px;
  }

  & .row {
    padding: 2rem;
  }
`;

const StyledImage = styled(Image)`
  border: transparent;
`;

const TabTablet = () => {
  return (
    <Wrapper className="d-none d-md-block mt-5 mb-5">
      <Tabs defaultActiveKey="first">
        <Tab eventKey="first" title="First">
          <Container className="pb-4">
            <Row>
              <Col xs={6} md={4}>
                <StyledImage src={Tab1} thumbnail />
              </Col>
              <Col className="d-flex justify-content-between flex-column">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
                  leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
                  pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Container className="d-flex align-items-center p-0 text-black">
                  <Share to="#" className="m-0 mx-2">
                    SHARE
                  </Share>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faFacebookF} className="mx-2 " />
                  </ShareIcons>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faTwitter} className="mx-2 " />
                  </ShareIcons>
                </Container>
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="second" title="Second">
          <Container className="pb-4">
            <Row>
              <Col xs={6} md={4}>
                <StyledImage src={Tab2} thumbnail />
              </Col>
              <Col className="d-flex justify-content-between flex-column">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
                  leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
                  pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Container className="d-flex align-items-center p-0 text-black">
                  <Share to="#" className="m-0 mx-2">
                    SHARE
                  </Share>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faFacebookF} className="mx-2 " />
                  </ShareIcons>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faTwitter} className="mx-2 " />
                  </ShareIcons>
                </Container>
              </Col>
            </Row>
          </Container>
        </Tab>

        <Tab eventKey="third" title="Third">
          <Container className="pb-4">
            <Row>
              <Col xs={6} md={4}>
                <StyledImage src={Tab3} thumbnail />
              </Col>
              <Col className="d-flex justify-content-between flex-column">
                <p>
                  Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra
                  leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula
                  pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                </p>
                <Container className="d-flex align-items-center p-0 text-black">
                  <Share to="#" className="m-0 mx-2">
                    SHARE
                  </Share>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faFacebookF} className="mx-2 " />
                  </ShareIcons>
                  <ShareIcons to="#">
                    <FontAwesomeIcon icon={faTwitter} className="mx-2 " />
                  </ShareIcons>
                </Container>
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </Wrapper>
  );
};

export default TabTablet;
