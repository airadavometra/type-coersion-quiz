import React, { FC } from 'react';
import classes from './Button.module.scss';

export interface ButtonProps {
  text: string;
  onClick(): void;
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={classes.button} onClick={() => onClick()}>
      {text}
    </button>
  );
};
