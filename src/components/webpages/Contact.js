import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import FormContact from "../content/Form";
import { Container, Col, Row } from "react-bootstrap";
import ContactInfo from "../profile/ContactInfo";
import styled from "styled-components";
import PageHeading from "../typography/Headings";
import { device } from "../../styles/Theme";

const FormWrapper = styled.div`
  background-color: #efefef;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
`;

const ContactWrapper = styled.div`
  margin-bottom: 9rem;

  @media ${device.tablet} {
    margin: 3rem auto 9rem auto;
  }
`;

export default function Contact() {
  useEffect(() => {
    document.title = "Contact us";
  });

  return (
    <ThemeProvider theme={theme}>
      <ContactWrapper>
        <Container className="d-lg-flex justify-content-center mt-4">
          <Row className="order-last">
            <Col>
              <ContactInfo />
            </Col>
          </Row>

          <Row>
            <PageHeading className="ms-3 ms-lg-0 p-lg-0">Submit your details</PageHeading>
            <FormWrapper>
              <Col>
                <FormContact />
              </Col>
            </FormWrapper>
          </Row>
        </Container>
      </ContactWrapper>
    </ThemeProvider>
  );
}
