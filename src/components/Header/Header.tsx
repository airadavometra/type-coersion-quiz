import { Link } from '@reach/router';
import React, { FunctionComponent, useState } from 'react';
import classes from './Header.module.scss';
import Logo from '@icons/black-cat.svg';
import classNames from 'classnames';
import { PageRoot } from '@constants';

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
            [classes.selectedLink]: isSelected(PageRoot.Main),
          })}
          onClick={() => goToPage(PageRoot.Main)}
        >
          <Link to={PageRoot.Main}>About</Link>
        </li>
        <li
          className={classNames(classes.link, {
            [classes.selectedLink]: isSelected(PageRoot.Eval),
          })}
          onClick={() => goToPage(PageRoot.Eval)}
        >
          <Link to={PageRoot.Eval}>eval()</Link>
        </li>
        <li
          className={classNames(classes.link, {
            [classes.selectedLink]: isSelected(PageRoot.CatQuiz),
          })}
          onClick={() => goToPage(PageRoot.CatQuiz)}
        >
          <Link to={PageRoot.CatQuiz}>Cat Quiz</Link>
        </li>
      </ul>
    </header>
  );
};
