import { setupWorker } from 'msw';
import handlers from './handlers';

const worker = setupWorker(...handlers);
const abc = 'test';

export {
  worker,
  abc,
};
