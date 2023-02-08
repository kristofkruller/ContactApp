import styled, { keyframes } from "styled-components";
import { DecorLineXBg, DecorLineYBg, IconShakeNScale, SpinAround } from "../../assets/GlobalStyles/animStyles";
import { devices } from "../../assets/GlobalStyles/globalStyles";

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

  //RESPO

  @media ${devices.tablet} {
    & {
      width: 100vw;
      margin: 20px auto;

      img[alt*="light"] {
        position: relative !important;
        right: 0 !important;
      }
      div[class*="DecorLine"] {
        display: none;
      }

      div[class*="DecorLineX"]:first-of-type {
        display: initial;
        top: 132px;
        height: 2px;
      }
    }

  }

  @media ${devices.mobileL} {
    & {
      margin: 0;
    }
    & > section[class*="ContactHeader"]{ 
      flex-direction: column;
    }
    div[class*="DecorLineX"]:first-of-type {
      top: 156px;
    }
  }

  @media ${devices.mobileS} {
    section[class*="ContactBody"] {
      height: calc(100vh - 156px);
      overflow-y: scroll;

      div[class*="ContactRow"] {
        flex-direction: column;
        max-height: none;
        margin: 12px 0;
        background-color: rgba(233,233,233,.15);
        border-radius: 10px;

        div[class*="SepaDiv"] {
          padding-bottom: 15px;
        }
      }
      div[class*="ContactRow"]:hover {
        background-color: rgba(233,233,233,.45);
      }
    }
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
  max-height: 68px;
  padding: 12px 0;

  & > div[class*="Spinner"] {
    max-height: 68px;
    justify-content: flex-end;
    margin-right: 44px;
  }
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
  img[alt*="more"]:hover {
    transform: scale(1.2);
    opacity: 1;
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
  min-width: fit-content;

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