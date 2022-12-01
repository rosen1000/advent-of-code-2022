import { range } from '../utils.js';

export default {
  part1: (input: string): number => {
    let calories = input
      .split('\n\n')
      .map((v) =>
        v
          .split('\n')
          .map((v) => +v)
          .reduce((sum, v) => (sum += v))
      )
      .reduce((prev, curr) => (prev > curr ? prev : curr));

    return calories;
  },
  part2: (input: string): number => {
    let caloriesArr = input
      .split('\n\n')
      .map((v) =>
        v
          .split('\n')
          .map((v) => +v)
          .reduce((sum, v) => (sum += v))
      )
      .sort((a, b) => b - a);
    let calories = 0;
    for (let i of range(3)) calories += caloriesArr[i]
    return calories;
  },
};

export function parseString(input: string) {
  let len = input.length + 2;
  len += input.split('"').length - 1;
  len += input.split('\\').length - 1;
  return len;
}

// 1342
