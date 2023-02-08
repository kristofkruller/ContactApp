import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const PulseBefore = keyframes`
  0% {
    box-shadow: 9984px 0 0 -5px;
  }
  30% {
    box-shadow: 9984px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 9984px 0 0 -5px;
  }
`
const Pulse = keyframes`
  0% {
    box-shadow: 9999px 0 0 -5px;
  }
  30% {
    box-shadow: 9999px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 9999px 0 0 -5px;
  }
`
const PulseAfter = keyframes`
  0% {
    box-shadow: 10014px 0 0 -5px;
  }
  30% {
    box-shadow: 10014px 0 0 2px;
  }
  60%, 100% {
    box-shadow: 10014px 0 0 -5px;
  }
`
const DotWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Dot = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primary};
  box-shadow: 9999px 0 0 -5px;
  animation: ${Pulse} 1.5s infinite linear;
  animation-delay: 0.25s;

  &::before, &::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.primary};
  }
  &::before {
  box-shadow: 9984px 0 0 -5px;
  animation: ${PulseBefore} 1.5s infinite linear;
  animation-delay: 0s;
  } 
  &::after {
    box-shadow: 10014px 0 0 -5px;
    animation: ${PulseAfter} 1.5s infinite linear;
    animation-delay: 0.5s;
  }
`

const PulseDot = () => {
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDot(true);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return ( <>
    { showDot ?
    <DotWrap>
      <Dot />
    </DotWrap>
    : null
    }
  </>)
}

export default PulseDot