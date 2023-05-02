import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import {
  BtnLI, 
  SecondaryBtnLI, 
  PrimaryBtnL, 
  SecondaryBtnL, 
  PrimaryBtnI, 
  SecondaryBtnI,
  PrimaryBtnLIAnim
} from "./btnStyles"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
  buttonType?: string, 
}


const BUTTON_TYPE_CLASSES = {
  BtnLI: "BtnLi", 
  SecondaryBtnLI: "SecondaryBtnLI", 
  SpecialBtnLI: "SpecialBtnLI", 
  PrimaryBtnL: "PrimaryBtnL", 
  SecondaryBtnL: "SecondaryBtnL", 
  PrimaryBtnI: "PrimaryBtnI", 
  SecondaryBtnI: "SecondaryBtnI",
  PrimaryBtnLIAnim: "PrimaryBtnLIAnim"
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.BtnLI) =>
  ({
    [BUTTON_TYPE_CLASSES.BtnLI]: BtnLI,
    [BUTTON_TYPE_CLASSES.SecondaryBtnLI]: SecondaryBtnLI,
    [BUTTON_TYPE_CLASSES.PrimaryBtnL]: PrimaryBtnL,
    [BUTTON_TYPE_CLASSES.SecondaryBtnL]: SecondaryBtnL,
    [BUTTON_TYPE_CLASSES.PrimaryBtnI]: PrimaryBtnI,
    [BUTTON_TYPE_CLASSES.SecondaryBtnI]: SecondaryBtnI,
    [BUTTON_TYPE_CLASSES.PrimaryBtnLIAnim]: PrimaryBtnLIAnim
  }[buttonType]);

const Btn: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export { BUTTON_TYPE_CLASSES, Btn }