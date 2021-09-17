import React from "react";
import styled from "styled-components";
import Home from "../webpages/Home";
import News from "../webpages/News";
import Contact from "../webpages/Contact";
import { device } from "../../styles/Theme";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Navbar, Nav, Button, FormControl, Form, NavbarBrand } from "react-bootstrap";

const StyledBrand = styled(NavbarBrand)`
  font-family: ${props => props.theme.primaryFont};

  & .nav-link {
    color: ${props => props.theme.primaryColour};
    font-family: ${props => props.theme.primaryFont};
    font-style: italic;
    font-size: 20px;
  }
`;

const StyledButton = styled(Button)`
  color: white;
  background-color: ${props => props.theme.primaryColour};
  height: 45px;
  border-radius: 0 6px 6px 0;
  border: none;

  &:hover {
    background-color: #ea4c83;
  }

  & .navbar-light .navbar-toggler {
    border: none;
    color: none;
  }
`;

const StyledInput = styled(FormControl)`
  padding: 0.5rem;
  height: 45px;
  border-radius: 6px 0 0 6px;
  border: none;

  &::placeholder {
    padding-left: 1rem;
  }

  @media ${device.laptop} {
    width: 245px;
  }
`;

const Shadow = styled.div`
  background-color: #efefef;
  & .navbar-collapse {
    & .navbar-nav {
      & .nav-link {
        font-size: 18px;
        color: black;
        width: 100%;
      }
    }
  }

  & .show {
    box-shadow: 0 15px 23px rgba(0 0 0 / 10%);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }
`;

// In our XD-design the logo and search-button is lined up
// with rest of the design. If I add a <Container> around the navbar,
// its lined up, but then I mess up my collapse-navbar-shadow-thing.
// So, finally I had to choose, because I cant figure out a better way to get both :)

export default function Navigation() {
  return (
    <Router>
      <Shadow>
        <Navbar expand="lg">
          <StyledBrand className="ps-2 ps-md-5">
            <NavLink exact to="/" className="nav-link ">
              The YAY Company
            </NavLink>
          </StyledBrand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 ps-2 ps-md-5" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-md-between ">
            <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                activeStyle={{
                  backgroundColor: "white",
                }}
                exact
                to="/"
                className="nav-link p-3 px-4 px-md-5 py-lg-1 px-lg-3">
                Home
              </NavLink>
              <NavLink
                activeStyle={{
                  backgroundColor: "white",
                }}
                to="/news"
                className="nav-link p-3 px-4 px-md-5 py-lg-1 px-lg-3">
                News
              </NavLink>
              <NavLink
                activeStyle={{
                  backgroundColor: "white",
                }}
                to="/contact"
                className="nav-link p-3 px-4 px-md-5 py-lg-1 px-lg-3">
                Contact
              </NavLink>
            </Nav>

            <Form className="d-flex p-3 px-4 px-md-3 px-lg-3">
              <StyledInput
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <StyledButton>Go</StyledButton>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Shadow>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}
