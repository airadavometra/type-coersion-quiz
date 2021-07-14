import React, { FunctionComponent } from 'react';
import classes from './NotFoundPage.module.scss';

export interface NotFoundPageProps {}

export const NotFoundPage: FunctionComponent = () => {
  return <div className={classes.main}>404</div>;
};
