import React, { FunctionComponent } from 'react';
import classes from './Footer.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={classes.main}>
      <a className={classes.link} href="https://airadavometra.space" target="_blank" rel="noopener noreferrer">
        <div>Made by airadavometra with ❤</div>
      </a>
    </footer>
  );
};
