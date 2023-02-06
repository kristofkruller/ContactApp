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

const HiddenFileInput = styled.input`
  display: none;
`
const BtnSepa = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & > button:first-of-type {
    width: 164px;
  } 
  & > button:last-of-type {
    width: 40px;
    min-width: unset;
  }
`


export { PopUpWrap, AddContactsPopUp, ProfilePic, PicWrap, HiddenFileInput, BtnSepa }