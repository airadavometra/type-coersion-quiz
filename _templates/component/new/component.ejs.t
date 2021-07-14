---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { FC } from 'react';
import classes from './<%= h.changeCase.pascal(name) %>.module.scss';

export interface <%= h.changeCase.pascal(name) %>Props {}

export const <%= h.changeCase.pascal(name) %>: FC<<%= h.changeCase.pascal(name) %>Props> = ({}) => {
  return (
    <div className={classes.main}>
    </div>
  );
};
