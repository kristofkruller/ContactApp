import styled, { keyframes } from "styled-components";
import { DecorLineXBg, DecorLineYBg, IconShakeNScale, SpinAround } from "../../assets/GlobalStyles/animStyles";

const ContactWrap = styled.main`
  width: 768px;

  display: flex;
  flex-direction: column;
  margin: 10rem auto;

  & > div[class*="DecorLineX"]:first-of-type {
    left: 0;
    top: 10rem;
    animation-duration: 17s;
  }
`
const ContactHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
`
const ContactBody = styled.section`
  display: flex;
  flex-direction: column;

  padding: 12px 24px;
`
const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 0;

  & > div[class*="Spinner"] {
    max-height: 68px;
    justify-content: flex-end;
    margin-right: 44px;
  }

  /* div[class*="ExitButton"], div[class*="ExitButton"] * {
    position: absolute;
    right: calc(calc(100vw - 768px)/2);
  } */
`
const ProfileBlock = styled.div`
  display: block;

  div[class*="inputFieldStyles__Label"] {
    margin-top: 0 !important;
    text-align: start;
  }
`
const SettingsBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 10px;

  img {
    cursor: pointer;
  }
  img[alt*="settings"], img[alt*="light"] {
    animation: ${SpinAround} 15s linear infinite forwards;
    opacity: .8;
  }
  img[alt*="settings"]:hover, img[alt*="light"]:hover {
    animation: ${SpinAround} 5s linear infinite backwards;
    opacity: 1;
  }
  img[alt*="user"]:hover, img[alt*="mute"]:hover, img[alt*="headphone"]:hover {
    animation: ${IconShakeNScale} .8s linear infinite forwards;
  }
`
const SepaDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    cursor: default;
    border-radius: 12px;
  }
`

// design only
const DecorLineX = styled.div`
  height: 1px;
  width: 100vw;
  left: 0;
  top: calc(10rem + 108px);
  position: absolute;
  transition: all 3s ease-in-out;
  animation: ${DecorLineXBg} 15s ease-in-out infinite forwards;
`
const DecorLineY = styled.div`
  height: 100vh;
  width: 1px;
  top: 0;
  right: calc(calc(100vw - 768px) / 2);
  position: absolute;
  animation: ${DecorLineYBg} 12s ease-in-out infinite backwards;
`
const DecorLineYLeft = styled(DecorLineY)`
  right: unset;
  left: calc(calc(100vw - 768px) / 2);
  animation-duration: 15s;
  animation-direction: reverse;
`

export {
  ContactWrap,
  ContactHeader,
  ContactBody,
  ContactRow,
  ProfileBlock,
  SettingsBlock,
  SepaDiv,
  DecorLineX,
  DecorLineY,
  DecorLineYLeft
}