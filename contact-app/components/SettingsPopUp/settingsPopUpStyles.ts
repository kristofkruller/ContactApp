import styled from "styled-components";
import { IconShakeNScale } from "../../assets/GlobalStyles/animStyles";
import { devices } from "../../assets/GlobalStyles/globalStyles";

const SettingsWrap = styled.section`
  width: 219px;
  height: 132px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.focused};

  position: relative;

  //RESPO

  @media ${devices.mobileS} {
    & {
      background-color: rgba(0,0,0,.25);
    }
  }
`
const SetRow = styled.div`
  --shade: inset var(--w) 0 0 0 ${({theme}) => theme.colors.blue};
  --w: 0px;
  display: flex;
  height: 44px;
  width: 100%;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 12px 10px;
  box-shadow: var(--shade);
  img {
    opacity: .56;
  }

  &:hover {
    --w: 219px;

    img {
      opacity: 1;
      animation: ${IconShakeNScale} .7s ease-in-out infinite forwards;
    }
  }
  //nextImg n BodyText inside
`

export { SettingsWrap, SetRow }