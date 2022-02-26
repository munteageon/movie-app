import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CardComponent from "./Components/CardComponent";

export const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  text-align: center;
  color: ${(props) => (props.color ? "aqua" : "black")};
  font-weight: ${(props) => (props.fontWeight ? 600 : 100)};
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 30px;
  border: 1px solid black;
  margin: 10px 0;
  padding: 5px 0;
`;

function App() {
  const [names, setNames] = useState([
    {
      age: 25,
      name: "김승석",
      phone: "010 - 1234 - 5678",
      home: "수유",
    },
    {
      age: 27,
      name: "김승석",
      phone: "010 - 1234 - 5678",
      home: "수유",
    },
    {
      age: 20,
      name: "문태건",
      phone: "010 - 1234 - 5678",
      home: "인천",
    },
    {
      age: 4,
      name: "문코코",
      phone: "010 - 1234 - 5678",
      home: "인천",
    },
  ]);

  return (
    <Wrapper>
      {names.map((potato, index) => (
        <React.Fragment key={index}>
          <CardComponent num={index} />
          <span>{potato.name}</span>
        </React.Fragment>
      ))}
    </Wrapper>
  );
}

export default App;
