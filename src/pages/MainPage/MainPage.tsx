import { Neon } from '@components/Neon/Neon';
import { PageRoot } from '@constants';
import { Link } from '@reach/router';
import React, { FunctionComponent } from 'react';
import classes from './MainPage.module.scss';

export const MainPage: FunctionComponent = () => {
  return (
    <div className={classes.main}>
      <Neon className={classes.title} text="Type coersion" />
      <div className={classes.description}>
        <span className={classes.descriptionArticle}>
          Welcome to <b>Types Coersion quiz</b>! Here you can practice and improve your JavaScript type coersion
          knowledge 💪 We have two games for that:
        </span>
        <span className={classes.descriptionArticle}>
          🙃 In{' '}
          <Link to={PageRoot.Eval} className={classes.gameLink}>
            <b>eval()</b>
          </Link>{' '}
          game you get an absolutely random JavaScript expression to answer what this expression returns. Simple, right?
        </span>
        <span className={classes.descriptionArticle}>
          🙃{' '}
          <Link to={PageRoot.CatQuiz} className={classes.gameLink}>
            <b>()lave</b>
          </Link>{' '}
          is more tricky (and somehow is a reverse of eval(), as you can guess). You get some expected value and a set
          of operands and operators. And you should combine them into the expression that returns expected value.
        </span>
      </div>
    </div>
  );
};
