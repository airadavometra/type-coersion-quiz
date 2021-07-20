import { Neon } from '@components/Neon/Neon';
import React, { FunctionComponent } from 'react';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Neon text="Page not found" />
    </div>
  );
};
