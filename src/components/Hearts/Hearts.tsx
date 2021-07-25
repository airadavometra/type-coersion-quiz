import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './Hearts.module.scss';

export interface HeartsProps {
  maxHearts: number;
  currentHearts: number;
}

export const Hearts: FC<HeartsProps> = ({ maxHearts, currentHearts }) => {
  const spentHearts = new Array(maxHearts - currentHearts).fill('💜');
  const availableHearts = new Array(currentHearts).fill('💜');
  return (
    <div className={classes.main}>
      {spentHearts.map((heart, index) => (
        <div className={classNames(classes.heart, classes.spentHeart)} key={index}>
          {heart}
        </div>
      ))}
      {availableHearts.map((heart, index) => (
        <div className={classNames(classes.heart, classes.availableHeart)} key={index}>
          {heart}
        </div>
      ))}
    </div>
  );
};
