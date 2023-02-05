import styled from 'styled-components'
import { Msg } from './typoStyles'

const InputWrap = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

const InputField = styled.input`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 8px; 

  height: 40px;
  width: 100%;

  transition: var(--transition-basic);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.actions};
  border: 1px solid ${({ theme }) => theme.colors.highlight};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hovered};
  }
  &:focus, &:active, &:hover {
    transition: var(--transition-basic);
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    top: 0; right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.4);
  }
`

const Label = styled(Msg)`
  line-height: 16px;
  opacity: .56;
  align-self: flex-start;
  margin-bottom: 4px;

  &:not(&:first-of-type) {
    margin-top: 24px;
  }
`

export { InputWrap, InputField, Label }