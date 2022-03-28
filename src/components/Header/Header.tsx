import React, { FunctionComponent } from 'react';
import classes from './Header.module.scss';
import Help from '@icons/question.svg';
import { PageRoot } from '@constants';
import { MenuItem } from '@components/MenuItem/MenuItem';
import { Match } from '@reach/router';
import { Tooltip } from '@components/Tooltip/Tooltip';

export const Header: FunctionComponent = () => {
  return (
    <header className={classes.main}>
      <ul className={classes.menu}>
        <MenuItem text="About" path={PageRoot.Main} />
        <MenuItem text="eval()" path={PageRoot.Eval} />
        <MenuItem text="Cat Quiz" path={PageRoot.CatQuiz} />
      </ul>
      <Match path={PageRoot.Eval}>
        {(props) =>
          props.match ? (
            <Tooltip text="What does the expression on the screen return? Select the right answer">
              <Help className={classes.icon} />
            </Tooltip>
          ) : null
        }
      </Match>
      <Match path={PageRoot.CatQuiz}>
        {(props) =>
          props.match ? (
            <Tooltip text="Combine cards in the correct order to get the expected result">
              <Help className={classes.icon} />
            </Tooltip>
          ) : null
        }
      </Match>
    </header>
  );
};
