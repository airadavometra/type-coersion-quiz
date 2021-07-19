import { Link } from '@reach/router';
import React, { FunctionComponent } from 'react';
import classes from './Header.module.scss';
import Logo from '@icons/black-cat.svg';

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.main}>
      <Logo className={classes.logo} />
      <div className={classes.menu}>
        <Link className={classes.link} to="/">
          <div>About app</div>
        </Link>
        <Link className={classes.link} to="/guessResult">
          <div>First game</div>
        </Link>
        <Link className={classes.link} to="/guessExpression">
          <div>Second game</div>
        </Link>
      </div>
    </header>
  );
};
