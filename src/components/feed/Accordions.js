import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Figure from "react-bootstrap/Figure";
import Tab1 from "../../images/tab-images/tab1.jpg";
import Tab2 from "../../images/tab-images/tab2.jpg";
import Tab3 from "../../images/tab-images/tab3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import Share, { ShareIcons } from "../profile/Links";

const StyledAccordion = styled(Accordion)`
  box-shadow: 1px ​8px 13px 3px rgba(0, 0, 0, 0.1);
  & .accordion-header {
    & .accordion-button {
      color: ${props => props.theme.primaryColour};
      font-size: 19px;
      background-color: ${props => props.theme.backgroundColour};
      box-shadow: none;

      &::after {
        display: none;
      }
    }
  }
  & .accordion-body {
    border-top: ${props => props.theme.primaryColour} solid 1px;
    background: ${props => props.theme.gradientCards};
  }
`;

const Accordions = () => {
  return (
    <StyledAccordion defaultActiveKey="0" className="d-md-none mb-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>First</Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-center">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Figure>
            <Figure.Image src={Tab1} className="mt-4" alt="image" />
            <Figure.Caption className="d-flex justify-content-center align-items-center text-black mt-4">
              <Share to="#" className="m-0 mx-2">
                SHARE
              </Share>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faFacebookF} className="mx-2 " />
              </ShareIcons>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faTwitter} className="mx-2 " />
              </ShareIcons>
            </Figure.Caption>
          </Figure>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Second</Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-center">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Figure>
            <Figure.Image src={Tab2} className="mt-4" alt="image" />
            <Figure.Caption className="d-flex justify-content-center align-items-center text-black mt-4">
              <Share to="#" className="m-0 mx-2">
                SHARE
              </Share>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faFacebookF} className="mx-2 " />
              </ShareIcons>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faTwitter} className="mx-2 " />
              </ShareIcons>
            </Figure.Caption>
          </Figure>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Third</Accordion.Header>
        <Accordion.Body className="d-flex flex-column align-items-center">
          <p>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
            laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra
            lectus non maximus. Sed condimentum mattis rhoncus.
          </p>
          <Figure>
            <Figure.Image src={Tab3} className="mt-4" alt="image" />
            <Figure.Caption className="d-flex justify-content-center align-items-center text-black mt-4">
              <Share to="#" className="m-0 mx-2">
                SHARE
              </Share>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
              </ShareIcons>
              <ShareIcons to="#">
                <FontAwesomeIcon icon={faTwitter} className="mx-2" />
              </ShareIcons>
            </Figure.Caption>
          </Figure>
        </Accordion.Body>
      </Accordion.Item>
    </StyledAccordion>
  );
};

export default Accordions;
