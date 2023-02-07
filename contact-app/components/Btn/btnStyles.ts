import styled from "styled-components";
import { SpinnerContainer } from "./Spinner";

// L = withLabel, I = withIcon

const BtnLI = styled.button`
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

  color: ${({theme}) => theme.colors.primary};
  background: ${({theme}) => theme.colors.actions};
  border-radius: 8px;
  border-color: transparent;

  //font
  font-family: 'Lexend', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  &:hover {
    transition: var(--transition-basic);
    background-color: ${({theme}) => theme.colors.secondary};
  }
  &:active, &:focus {
    transition: var(--transition-basic);
    background-color: ${({theme}) => theme.colors.pressed};
  }

  & > label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
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
  ExitButton
}