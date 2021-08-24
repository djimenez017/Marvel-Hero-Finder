import React, { useState } from "react";
import styled from "styled-components";

const NavigationStyles = styled.nav`
  width: 100%;
  background: white;
  z-index: 2;
  height: 8vh;
  border-bottom: 4px solid black;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  input {
    margin-left: 5px;
    padding: 7px;
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
  }

  @media (max-width: 481px) {
    height: 12vh;
    flex-direction: column;
    text-align: center;

    img {
      width: 100px;
      margin: 15px;
    }
  }
`;

export default function NavigationBar() {
  const [value, setValue] = useState("");

  return (
    <NavigationStyles>
      <h1>Comic Finder</h1>
      <form>
        <label htmlFor="hero">Search Hero</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          heroName={value}
        />
      </form>
    </NavigationStyles>
  );
}
