---
to: src/containers/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { <%= h.changeCase.pascal(name) %> as <%= h.changeCase.pascal(name) %>Component } from '@components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>';

export const <%= h.changeCase.pascal(name) %>: FC = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return <<%= h.changeCase.pascal(name) %>Component />
};
