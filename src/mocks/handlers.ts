import { config } from '@config';
import { rest } from 'msw';

const apiDomain = config.VITE_API_DOMAIN;

export const handlers = [
  rest.get(`${apiDomain}/example`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: 'test' }));
  }),
];
