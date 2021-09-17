import React from "react";
import styled from "styled-components";
import { device } from "../../styles/Theme";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage1 from "../../images/carousel-images/carousel-1.jpg";
import CarouselImage2 from "../../images/carousel-images/carousel-2.jpg";
import CarouselImage3 from "../../images/carousel-images/carousel-3.jpg";

const StyledCarousel = styled(Carousel)`
  & .carousel-control-prev,
  .carousel-control-next {
    display: none;
  }

  & .carousel-item {
    height: 287px;

    @media ${device.laptop} {
      height: 462px;
    }
    & .d-block {
      object-fit: cover;
    }
  }

  & .carousel-indicators {
    & button {
      background-color: ${props => props.theme.backgroundColour};
      height: 10px;
      width: 30px;
      box-shadow: 2px 7px 10px rgba(0, 0, 0, 0.4);
      background-clip: border-box;
      opacity: 1;
      border-radius: 5px;
      margin-right: 6px;
      margin-left: 6px;
    }
    & .active {
      background-color: ${props => props.theme.primaryColour};
    }
    @media ${device.tablet} {
      margin-bottom: 2rem;
    }
  }
`;

export default function CarouselHeader() {
  return (
    <StyledCarousel fade>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={CarouselImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={CarouselImage2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={CarouselImage3} alt="Third slide" />
      </Carousel.Item>
    </StyledCarousel>
  );
}
