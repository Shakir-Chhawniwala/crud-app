import React, { useState, useContext } from "react";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./NavBar.css";
import Autosuggest from "react-autosuggest";
import { PostContext } from "../../store/post-context";
import SearchBar from "./SearchBar"



const NavBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const context = useContext(PostContext);

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : context.posts.filter(
          (post) =>
            post.title.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion.title;

  const renderSuggestion = (suggestion) => <div>{suggestion.title}</div>;

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions (getSuggestions(value));
  };
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };
  const inputProps = {
    placeholder: "Type a programming language",
    value,
    onChange: onChange,
  };
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
          <SearchBar
            // suggestions={suggestions}
            // onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            // onSuggestionsClearRequested={onSuggestionsClearRequested}
            // getSuggestionValue={getSuggestionValue}
            // renderSuggestion={renderSuggestion}
            // inputProps={inputProps}
          />
          {/* <Autosuggest
        
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          /> */}
          {/* <Form.Control type="text" placeholder="Search" className="mr-sm-2"
             suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
           /> */}
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default NavBar;
