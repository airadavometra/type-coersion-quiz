import React, { FunctionComponent } from 'react';
import GitHubLogo from '@icons/github.svg';
import classes from './Footer.module.scss';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={classes.main}>
      <div className={classes.linksContainer}>
        <a
          className={classes.link}
          href="https://github.com/airadavometra/type-coersion-quiz"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => gtag('event', 'click', { event_category: 'github link', event_label: 'github link' })}
        >
          <div>GitHub&nbsp;</div>
        </a>
        <GitHubLogo className={classes.githubLogo} />
      </div>
      <div className={classes.linksContainer}>
        <span>Made by&nbsp;</span>
        <a
          className={classes.link}
          href="https://airadavometra.space"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            gtag('event', 'click', { event_category: 'airadavometra link', event_label: 'airadavometra link' })
          }
        >
          <div>airadavometra</div>
        </a>
      </div>
    </footer>
  );
};
