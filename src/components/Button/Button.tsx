import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './Button.module.scss';

export interface ButtonProps {
  className: string;
  text: string;
  onClick(): void;
}

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={classNames(className, classes.button)} onClick={() => onClick()}>
      {text}
    </button>
  );
};
