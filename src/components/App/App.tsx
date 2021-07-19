import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { MainPage } from '@pages/MainPage/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';
import { Router, RouteComponentProps } from '@reach/router';
import React, { FunctionComponent } from 'react';
import classes from './App.module.scss';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

export const App: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Header />
      <Router>
        <RouterPage path="/" pageComponent={<MainPage />} />
        <RouterPage default pageComponent={<NotFoundPage />} />
      </Router>
      <Footer />
    </div>
  );
};
