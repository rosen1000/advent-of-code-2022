import test from 'ava';
import { range } from './utils.js';

test('range()', (t) => {
  t.deepEqual(range(5), [0, 1, 2, 3, 4]);
  t.deepEqual(range(0), []);
  t.deepEqual(range(3, 6), [3, 4, 5]);
  t.deepEqual(range(6, 3), [3, 4, 5]);
});
