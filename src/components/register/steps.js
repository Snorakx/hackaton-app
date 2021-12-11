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
  background-color:${props => (props.color ? '#33A480' : `#DCDCDC`)};
  border:1px solid #FFFDFC;
  border-radius:2px;
`;

const CustomContainerLines = styled.div`
  display: flex;
  align-items: center;
  color: #4d4d4d;
  justify-content: center;
  margin: 0 auto;
  height:5px;
  margin-left:-32px;
  margin-right:-32px;
  
`;

const StepsComponent = (props) => {
  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);


  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    if(location.pathname === "/configureRoute")
    {
        setColor1(true);
        setColor2(true);
        setColor3(true);
    }else if(location.pathname === "/startPage"){
        setColor1(true)
        setColor2(true)

    }else{
        setColor1(true)
    }
  }, [])
 
  return (
    <CustomContainerLines>
      <Line color={color1}></Line>
      <Line  color={color2}></Line>
      <Line  color={color3}></Line>
    </CustomContainerLines>
  );
};

export default StepsComponent;
