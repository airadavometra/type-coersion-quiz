import { Neon } from '@components/Neon/Neon';
import React, { FC } from 'react';
import classes from './CatsQuizPage.module.scss';

export const CatsQuizPage: FC = ({}) => {
  return (
    <div className={classes.main}>
      <Neon text="Coming soon" />
    </div>
  );
};
