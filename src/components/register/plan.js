import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Line = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border:1px solid #FFFDFC;
  border-radius:2px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #4d4d4d;
  justify-content: center;
  width: 100%;
  max-width: 376px;
  margin: 0 auto;
  height:5px;
  
`;

const PlanComponent = (props) => {
 
  return (
    <Container>
        <div>
            Plan
        </div>
    </Container>
  );
};

export default PlanComponent;
