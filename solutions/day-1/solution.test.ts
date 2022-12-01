import solution from './solution.js';
import test from 'ava';

test('part1', (t) => {
  let output = solution.part1(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`);

  t.is(output, 24000);
});

test('part2', (t) => {
  let output = solution.part2(`1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`);

  t.is(output, 45000);
});
