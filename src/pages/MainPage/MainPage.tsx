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
          Welcome to <b>8 Out Of 10 🐱 Does Types Coersion</b> game! Here you can practice and improve your JavaScript
          type coersion knowledge 💪 We have two games for that:
        </span>
        <span className={classes.descriptionArticle}>
          🙃 In{' '}
          <Link to={PageRoot.Eval} className={classes.gameLink}>
            <b>eval()</b>
          </Link>{' '}
          game you get a JavaScript expression to answer what this expression returns. Simple, right?
        </span>
        <span className={classes.descriptionArticle}>
          🙃{' '}
          <Link to={PageRoot.CatQuiz} className={classes.gameLink}>
            <b>Cat Quiz</b>
          </Link>{' '}
          is more tricky. It&apos;s not ready yet, but it&apos;s going to be mindblowing! Just wait for it...
        </span>
      </div>
    </div>
  );
};
