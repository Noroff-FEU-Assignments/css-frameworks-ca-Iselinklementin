import React, { useEffect } from "react";
import CarouselHeader from "../feed/Carousel";
import Container from "react-bootstrap/Container";
import Accordions from "../feed/Accordions";
import TabTablet from "../feed/Tabs";
import PageHeading from "../typography/Headings";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";

export default function Home() {
  useEffect(() => {
    document.title = "The YAY Company";
  });

  return (
    <ThemeProvider theme={theme}>
      <CarouselHeader />
      <Container className="px-4">
        <PageHeading>We do YAY things</PageHeading>
        <p className="pt-0">
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros
          pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus
          massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam,
          efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>
        <Accordions />
        <TabTablet />
      </Container>
    </ThemeProvider>
  );
}
