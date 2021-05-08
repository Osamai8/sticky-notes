import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <StyledHeader>
      <h2>Sticky Notes</h2>
      <form>
        <input onChange={inputHandler} type="search" placeholder="Search..." />
      </form>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  $shadow: #fc0;
  height: 10vh;
  h2 {
    margin: 1rem;
  }

  form {
    display: block;
    left: 40%;
    position: absolute;
    top: 2%;
    input[type="search"] {
      border: solid 3px #fff;
      box-sizing: border-box;
      font-size: 1.3rem;
      height: 2em;
      margin-left: -15vw;
      outline: solid #4cb8c4 0;
      padding: 0.5em;
      transition: all 2s ease-in-out;
      width: 50vw;
      min-width: 20vw;
      font-family: "Caveat", cursive;
      z-index: 1;
      &:focus {
        border: solid 3px #3cd3ad;
        outline: solid #4cb8c4 1vh;
      }
    }
  }
`;

export default Header;
