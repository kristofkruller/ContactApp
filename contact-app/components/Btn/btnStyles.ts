import styled, { keyframes } from "styled-components";
import { Shake } from "../../assets/GlobalStyles/animStyles";
import { SpinnerContainer } from "./Spinner";

// L = withLabel, I = withIcon

const BorderOnBtn = keyframes`
    to {
      --border-angle: 1turn;
    }
`

const BtnLI = styled.button`
  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }

  --border-size: 3px;
  --border-angle: 0turn;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 8px 12px;
  cursor: pointer;
  transition: var(--transition-basic);
  min-width: 119px;
  width: auto;
  height: 40px;
  gap: 8px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
  border-radius: 4px;

  //font
  font-family: 'Lexend', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    transition: var(--transition-basic);
    animation: ${Shake} .9s linear infinite;
  }
  &:active, &:focus {
    transition: var(--transition-basic);
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
  }
`
const PrimaryBtnLIAnim = styled(BtnLI)`
  // invoke anim
  background-image: 
    conic-gradient(
      from var(--border-angle),
      ${({theme}) => theme.colors.actions},
      ${({theme}) => theme.colors.bg} 50%,
      ${({theme}) => theme.colors.actions}
    ),
    conic-gradient(
      from var(--border-angle), 
      ${({theme}) => theme.colors.bg} 20%, 
      ${({theme}) => theme.colors.blue},
      ${({theme}) => theme.colors.gelb}
  );
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: ${BorderOnBtn} 15s linear infinite forwards;
  &:hover, &:active, &:focus {
    animation: ${BorderOnBtn} 15s linear infinite forwards;
    transform: scale(1.05);
  }
`
const SecondaryBtnLI = styled(BtnLI)`
  background-color: transparent;

  &:hover {
    background-color: ${({theme}) => theme.colors.hovered};
  }
  &:active, &:focus {
    background-color: ${({theme}) => theme.colors.focused};
  }
`

// label only

const PrimaryBtnL = styled(BtnLI)`
  padding: 8px 16px;
  width: 91px;
`
const SecondaryBtnL = styled(PrimaryBtnL)`
  background-color: transparent;
  &:hover {
    background-color: ${({theme}) => theme.colors.hovered};
    animation: unset;
    transform: scale(1.05);
  }
  &:active, &:focus {
    background-color: ${({theme}) => theme.colors.focused};
  }
`

// icon only

const PrimaryBtnI = styled(BtnLI)`
  padding: 8px;
  width: 40px;
`
const SecondaryBtnI = styled(PrimaryBtnI)`
  background-color: transparent;
  &:hover {
    background-color: ${({theme}) => theme.colors.hovered};
  }
  &:active, &:focus {
    background-color: ${({theme}) => theme.colors.focused};
  }
`

const BtnWrap = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;
`
const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
  margin: 0 auto;
`
const ExitButton = styled.div`
  width: 54px;
  height: 34px;
  background-color: rgba(0,0,0,.17);
  color: ${({theme}) => theme.colors.focused};
  opacity: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: auto;

  & > div {
    transform: translate(-7px, -5px) rotate(0deg);
  }
  & > div:first-of-type {
    transform: translate(8px, 5px) rotate(0deg);  
  }
  &::before {
    content: "CLOSE";
    position: absolute;
    font-size: 8px;
    font-weight: 600;
    font-family: 'Lexend';
    color: ${({theme}) => theme.colors.gelb};
    opacity: 1;
  }
  &:hover {
    & > div {
      transform: translate(-8px, 0px) rotate(-45deg);
      background-color: ${({theme}) => theme.colors.gelb};
    }
    & > div:first-of-type {
      transform: translate(8px, 0px) rotate(45deg);
      background-color: ${({theme}) => theme.colors.gelb};
    }
    &::before {
      opacity: 0;
    }
  }
`
const ExitButtonLines = styled.div`
  height: 1.5px;
  width: 15px;
  background-color: transparent;
`
// decor only, anim

export { 
  BtnLI, 
  SecondaryBtnLI, 
  PrimaryBtnL, 
  SecondaryBtnL, 
  PrimaryBtnI, 
  SecondaryBtnI,
  BtnWrap, 
  ButtonSpinner,
  ExitButton,
  PrimaryBtnLIAnim,
  ExitButtonLines
}