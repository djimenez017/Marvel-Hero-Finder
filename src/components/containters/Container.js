import styled from "styled-components";
import character from "../responses/character.json";
import Card from "../UI/cards/heroCard";

const ContainerStyle = styled.main`
  background: white;
  margin: 0 auto;
  box-sizing: border-box;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  border-left: 4px solid black;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  -webkit-box-shadow: 0px 0px 16px -4px rgba(0, 0, 0, 0.67);
  box-shadow: 0px 0px px 0px rgba(0, 0, 0, 0.8);
  margin-bottom: 80px;
  padding-bottom: 40px;
  ${"" /* color: ${(props) => (props.whiteColor ? "white" : "black")}; */}

  @media (max-width: 481px) {
    width: 95%;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }
`;

export default function Container(props) {
  const characterData = character.data.results[0];
  console.log(props);
  return (
    <ContainerStyle>
      <Card hero={characterData} />
    </ContainerStyle>
  );
}
