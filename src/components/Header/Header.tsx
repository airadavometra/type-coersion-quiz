import { Link } from '@reach/router';
import React, { FunctionComponent } from 'react';
import classes from './Header.module.scss';
import Logo from '@icons/black-cat.svg';

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.main}>
      <Logo className={classes.logo} />
      <div className={classes.links}>
        <Link className={classes.link} to="/">
          About app
        </Link>
        <Link className={classes.link} to="/guessResult">
          Guess expression result game
        </Link>
        <Link className={classes.link} to="/guessExpression">
          Guess expression by its result game
        </Link>
      </div>
    </header>
  );
};
