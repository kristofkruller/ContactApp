import styled from "styled-components";
import Image from "next/image";

const AddContactsPopUp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 364px;

  padding: 24px;
  gap: 24px;
  background-color: ${({theme}) => theme.colors.bg};

  
  #title {
    align-self: flex-start;
  }
`

const PicWrap = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`
const ProfilePic = styled(Image)`
  border-radius: 50%;
  margin-right: 16px;
`


export { AddContactsPopUp, ProfilePic, PicWrap }