import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';

export interface MainPageProps {}

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.title}>Type coersion</h1>
      <div className={classes.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit molestias quae ab, dignissimos illo
        corrupti ea necessitatibus voluptatum quis sed alias, molestiae commodi, asperiores accusantium laborum magnam
        sapiente ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit molestias quae ab,
        dignissimos illo corrupti ea necessitatibus voluptatum quis sed alias, molestiae commodi, asperiores accusantium
        laborum magnam sapiente ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit molestias
        quae ab, dignissimos illo corrupti ea necessitatibus voluptatum quis sed alias, molestiae commodi, asperiores
        accusantium laborum magnam sapiente ipsum.
      </div>
    </div>
  );
};
