import { Code } from '@components/Code/Code';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './CatGameCard.module.scss';

export interface CatGameCardProps {
  className?: string;
  text: string;
  onClick(): void;
}

export const CatGameCard: FC<CatGameCardProps> = ({ text, onClick, className }) => {
  return (
    <div className={classNames(className, classes.card)} onClick={() => onClick()}>
      <Code code={text} />
    </div>
  );
};
