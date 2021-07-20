import { Neon } from '@components/Neon/Neon';
import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Neon className={classes.title} text="Type coersion" />
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
