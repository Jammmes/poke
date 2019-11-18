import React, { FunctionComponent } from 'react';
import { Button as ButtonAntd }  from 'antd';
import 'antd/lib/button/style/css';
import { ButtonType } from 'antd/lib/button';

export interface IButtonProps {
  onClick?: (value: any) => void;
  type?: ButtonType;
  disabled?: boolean;
}

export const Button: FunctionComponent<IButtonProps> = ({ onClick, type = 'default', disabled = false, children }) => {
  return (<ButtonAntd type={type} onClick ={onClick} disabled = {disabled} >{children}</ButtonAntd>);
};
