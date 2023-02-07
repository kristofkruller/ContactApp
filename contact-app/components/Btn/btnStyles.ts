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
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), black 20%, #08f, #f03
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
const SpecialBtnLI = styled(BtnLI)`
  background: linear-gradient(180deg, rgba(40, 40, 40, 0.7) 0%, #282828 100%), #141414;
  &:hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(180deg, rgba(40, 40, 40, 0.7) 0%, #282828 100%), #141414;  
  }
  &:active, &:focus {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(180deg, rgba(40, 40, 40, 0.7) 0%, #282828 100%), #141414;
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
  width: 44px;
  height: 44px;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.focused};
  opacity: .56;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: .7;
  }
`

// decor only, anim


export { 
  BtnLI, 
  SecondaryBtnLI, 
  SpecialBtnLI, 
  PrimaryBtnL, 
  SecondaryBtnL, 
  PrimaryBtnI, 
  SecondaryBtnI,
  BtnWrap, 
  ButtonSpinner,
  ExitButton,
  PrimaryBtnLIAnim
}