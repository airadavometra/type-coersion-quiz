import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';

export const App: FunctionComponent = () => {
  return (
    <Router>
      <div className={classes.main}>
        <Header text="Hello" />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
