import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import PaginationManager from "../content/Pagination";
import Cards from "../feed/Cards";
import PageHeading from "../typography/Headings";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";

export default function News() {
  useEffect(() => {
    document.title = "News";
  });

  return (
    <ThemeProvider theme={theme}>
      <Container className="px-4">
        <PageHeading>News</PageHeading>
        <PaginationManager />
        <Cards />
        <PaginationManager />
      </Container>
    </ThemeProvider>
  );
}
