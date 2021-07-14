import { Example } from '@containers/Example';
import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';

export interface MainPageProps {}

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Example />
    </div>
  );
};
