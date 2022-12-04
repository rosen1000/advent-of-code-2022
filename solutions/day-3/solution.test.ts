import solution from './solution.js';
import test from 'ava';

let input = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

test('part1', (t) => {
  t.is(solution.part1(input), 157);
});

test('part2', (t) => {
  t.is(solution.part2(input), 70);
});
