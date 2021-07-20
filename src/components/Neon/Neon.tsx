import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './Neon.module.scss';

export interface NeonProps {
  text: string;
  className?: string;
}

export const Neon: FC<NeonProps> = ({ text, className }) => {
  return <h1 className={classNames(classes.neon, className)}>{text}</h1>;
};
