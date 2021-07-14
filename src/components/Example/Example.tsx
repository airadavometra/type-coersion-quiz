import React, { FC } from 'react';
import HomeIcon from '@icons/home.svg';
import classes from './Example.module.scss';

export interface ExampleProps {
  onClick(): void;
  isLoading: boolean;
  data: string;
}

export const Example: FC<ExampleProps> = ({ onClick, isLoading, data }) => {
  return (
    <button onClick={onClick} className={classes.main}>
      <HomeIcon className={classes.icon} />
      {isLoading ? 'Loading...' : data}
    </button>
  );
};
