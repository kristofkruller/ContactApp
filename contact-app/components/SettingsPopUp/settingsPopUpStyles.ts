import styled from "styled-components";

const SettingsWrap = styled.section`
  width: 219px;
  height: 132px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.focused};
`
const SetRow = styled.div`
  display: flex;
  height: 44px;
  width: 100%;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: 12px 10px;

  img {
    opacity: .56;
  }
  //nextImg n BodyText inside
`

export { SettingsWrap, SetRow }