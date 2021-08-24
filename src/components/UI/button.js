import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  border: solid 4px black;
  background: #ffee33;
  color: black;
  height: 40px;
  width: 150px;

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export default function button(props) {
  return (
    <ButtonStyles>
      <a href={props.to} target="_blank">
        {props.children}
      </a>
    </ButtonStyles>
  );
}
