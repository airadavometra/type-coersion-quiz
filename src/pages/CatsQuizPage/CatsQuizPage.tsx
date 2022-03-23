import { Neon } from '@components/Neon/Neon';
import React, { FC } from 'react';
import classes from './CatsQuizPage.module.scss';
import { Hearts } from '@containers/Hearts';
import { Score } from '@containers/Score';
import { CatQuiz } from '@containers/CatQuiz';
export const CatsQuizPage: FC = ({}) => {
  return (
    <div className={classes.main}>
      <Score gameKey="catGame" />
      <Hearts />
      <CatQuiz />
    </div>
  );
};
