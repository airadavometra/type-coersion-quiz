import React, { FC } from 'react';
import classes from './CatsQuizPage.module.scss';

export interface CatsQuizPageProps {}

export const CatsQuizPage: FC<CatsQuizProps> = ({}) => {
  return <div className={classes.main}></div>;
};
