import { Code } from '@components/Code/Code';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './CatGameCard.module.scss';

export interface CatGameCardProps {
  resolved: boolean;
  isCorrect?: boolean;
  className?: string;
  text: string;
  onClick?(): void;
}

export const CatGameCard: FC<CatGameCardProps> = ({ text, onClick, className, resolved, isCorrect }) => {
  return (
    <div
      className={classNames(className, classes.card, {
        [classes.correct]: resolved && isCorrect !== undefined && isCorrect,
        [classes.wrong]: resolved && isCorrect !== undefined && !isCorrect,
      })}
      onClick={() => onClick && onClick()}
    >
      <Code code={text} />
    </div>
  );
};
