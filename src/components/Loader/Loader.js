import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: ${(props) => (props.h ? props.h : 24)}px;
  height: ${(props) => (props.h ? props.h : 24)}px;
  border: 4px solid #ffffff;
  /* border-top: 4px solid #389244; */
  border-top: 3px solid ${(props) => (props.color ? props.color : "#389244")};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loader = (color, h) => {
  return <Spinner {...color} {...h} />;
};

export default Loader;
