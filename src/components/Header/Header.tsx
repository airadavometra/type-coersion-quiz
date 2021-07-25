import React, { FunctionComponent } from 'react';
import classes from './Header.module.scss';
import Logo from '@icons/black-cat.svg';
import { PageRoot } from '@constants';
import { MenuItem } from '@components/MenuItem/MenuItem';

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.main}>
      <Logo className={classes.logo} />
      <ul className={classes.menu}>
        <MenuItem text="About" path={PageRoot.Main} />
        <MenuItem text="eval()" path={PageRoot.Eval} />
        <MenuItem text="Cat Quiz" path={PageRoot.CatQuiz} />
      </ul>
    </header>
  );
};
