import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';
import { Router } from '@reach/router';
import React, { FunctionComponent } from 'react';
import classes from './App.module.scss';

export const App: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Router>
        <MainPage path="/" />
        <NotFoundPage default />
      </Router>
    </div>
  );
};
