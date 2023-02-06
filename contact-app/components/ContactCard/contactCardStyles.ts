import styled from "styled-components";

const ContactWrap = styled.main`
  width: 768px;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
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
`
const SepaDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export {
  ContactWrap,
  ContactHeader,
  ContactBody,
  ContactRow,
  ProfileBlock,
  SettingsBlock,
  SepaDiv
}