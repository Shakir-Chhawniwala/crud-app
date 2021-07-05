import React from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">CRUD</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer className="link-item" to="/create-post">
            <Nav.Link>Create Post</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link-item" to="/">
            <Nav.Link>Read Post</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link-item" to="/update-post">
            <Nav.Link>Update Post</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link-item" to="/liked-post">
            <Nav.Link>Liked Post</Nav.Link>
          </LinkContainer>
          <LinkContainer className="link-item" to="/disliked-post">
            <Nav.Link>DisLiked Post</Nav.Link>
          </LinkContainer>
        </Nav>

        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
