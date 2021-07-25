import React, { FunctionComponent } from 'react';
import classes from './Footer.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={classes.main}>
      <span>Made by&nbsp;</span>
      <a className={classes.link} href="https://airadavometra.space" target="_blank" rel="noopener noreferrer">
        <div>airadavometra</div>
      </a>
      <span>&nbsp;with ❤️ and&nbsp;</span>
      <a className={classes.link} href="https://vlivanov.space" target="_blank" rel="noopener noreferrer">
        <div>omhet&apos;s</div>
      </a>
      <span>&nbsp;helping</span>
    </footer>
  );
};
