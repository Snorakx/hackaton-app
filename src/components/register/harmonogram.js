import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Day = styled.div`
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 35px;
  background-color: #fff;
  border: 1px solid #8895a3;
  color: #4d4d4d;
  height: 35px;
  margin: 0 4.5px;
  &.active {
    background-color: #dbefe9;
    border: 1px solid #33a480;
    color: #33a480;
  }
`;

const FirstHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 62px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  justify-self: start;
  color: #4d4d4d;
  flex-direction: column;
`;
const DaysContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const HarmonogramComponent = (props) => {
  const days = [{name:"Pon", id:1}, {name:"Wt", id:2}, {name:"Śr", id:3}, {name:"Czw", id:4}, {name:"Pt",id:1},{name: "Sob",id:6},{name: "Nd",id:7}];

  return (
    <Container className="harmo">
      <FirstHeader>Wybierz Harmonogram</FirstHeader>
      <DaysContainer>
        {days.map((item) => {
          return (
            <Day key={item.id} onClick={({ target }) => target.classList.toggle("active")}>
              {item.name}
            </Day>
          );
        })}
      </DaysContainer>
    </Container>
  );
};

export default HarmonogramComponent;
