import React, { FC } from 'react';
import classes from './Score.module.scss';

export interface ScoreProps {
  currentScore: number;
  maxScore: number;
}

export const Score: FC<ScoreProps> = ({ currentScore, maxScore }) => {
  return (
    <div className={classes.main}>
      <div className={classes.scoreItem}>🤘 Score: {currentScore}</div>
      <div className={classes.scoreItem}>🔥 High score: {maxScore}</div>
    </div>
  );
};
