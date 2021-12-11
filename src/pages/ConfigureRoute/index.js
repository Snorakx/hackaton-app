import React from "react";
import styled from "styled-components";
import HarmonogramComponent from "../../components/register/harmonogram";
import StepsComponent from "../../components/register/steps";

const FirstHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 62px;
`;
const SecondHeader = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #4d4d4d;
  width: 100%;
  margin-top: 10px;
`;
const CustomContainer = styled.div`
    padding:0 32px;
`;

const ConfigureRoutePage = (props) => {
  return (
    <CustomContainer className="configure-page">
      <StepsComponent />
      <FirstHeader>Zaplanuj dojazd</FirstHeader>
      <SecondHeader>
        Ustal harmonogram trasy, aby lepiej dopasować swoje dojazdy
      </SecondHeader>
      <HarmonogramComponent/>
      <div class="route-options-box"></div>
      <div class="routine-options-box"></div>
      <div class="buttons-box"></div>
    </CustomContainer>
  );
};

export default ConfigureRoutePage;
