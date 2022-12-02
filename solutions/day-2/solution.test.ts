import solution from './solution.js';
import test from 'ava';

test('part1', (t) => {
  t.is(
    solution.part1(`A Y
B X
C Z`),
    15
  );
});

test('part2', (t) => {
  t.is(
    solution.part2(`A Y
B X
C Z`),
    12
  );
  t.is(
    solution.part2(`A X
B X
C X
A Y
B Y
C Y
A Z
B Z
C Z`),
    45
  );
});
