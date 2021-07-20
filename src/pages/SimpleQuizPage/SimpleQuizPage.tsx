import { SimpleQuiz } from '@containers/SimpleQuiz';
import React, { FunctionComponent } from 'react';
import classes from './SimpleQuizPage.module.scss';

export const SimpleQuizPage: FunctionComponent = ({}) => {
  return (
    <div className={classes.main}>
      <SimpleQuiz />
    </div>
  );
};
