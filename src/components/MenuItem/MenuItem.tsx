import { Link } from '@reach/router';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './MenuItem.module.scss';

export interface MenuItemProps {
  text: string;
  path: string;
}

export const MenuItem: FC<MenuItemProps> = ({ text, path }) => {
  return (
    <li className={classes.linkContainer}>
      <Link
        to={path}
        getProps={({ isCurrent }) => {
          return {
            className: classNames(classes.link, { [classes.selectedLink]: isCurrent }),
          };
        }}
      >
        {text}
      </Link>
    </li>
  );
};
