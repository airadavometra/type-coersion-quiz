import { Link } from '@reach/router';
import React, { FunctionComponent, useState } from 'react';
import classes from './Header.module.scss';
import Logo from '@icons/black-cat.svg';
import classNames from 'classnames';

export const Header: FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState(window.location.pathname);

  const isSelected = (path: string) => selectedItem === path;

  const goToPage = (path: string) => {
    setSelectedItem(path);
  };

  return (
    <header className={classes.main}>
      <Logo className={classes.logo} />
      <ul className={classes.menu}>
        <li
          className={classNames(classes.link, {
            [classes.selectedLink]: isSelected('/'),
          })}
          onClick={() => goToPage('/')}
        >
          <Link to="/">
            <div>About app</div>
          </Link>
        </li>
        <li
          className={classNames(classes.link, {
            [classes.selectedLink]: isSelected('/guessResult'),
          })}
          onClick={() => goToPage('/guessResult')}
        >
          <Link to="/guessResult">
            <div>First game</div>
          </Link>
        </li>
        <li
          className={classNames(classes.link, {
            [classes.selectedLink]: isSelected('/guessExpression'),
          })}
          onClick={() => goToPage('/guessExpression')}
        >
          <Link to="/guessExpression">
            <div>Second game</div>
          </Link>
        </li>
      </ul>
    </header>
  );
};
