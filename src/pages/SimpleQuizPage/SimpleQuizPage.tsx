import { Hearts } from '@containers/Hearts';
import { Score } from '@containers/Score';
import { SimpleQuiz } from '@containers/SimpleQuiz';
import React, { FunctionComponent } from 'react';
import classes from './SimpleQuizPage.module.scss';

export const SimpleQuizPage: FunctionComponent = ({}) => {
  return (
    <div className={classes.main}>
      <Score gameKey="evalGame" />
      <Hearts gameKey="evalGame" />
      <SimpleQuiz />
    </div>
  );
};
