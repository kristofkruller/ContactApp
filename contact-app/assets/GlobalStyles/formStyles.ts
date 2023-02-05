import styled from "styled-components";
import Image from "next/image";

const PopUpWrap = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,.4);
`

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


export { PopUpWrap, AddContactsPopUp, ProfilePic, PicWrap }