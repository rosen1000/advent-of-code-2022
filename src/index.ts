import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import axios from 'axios';
import { config as c } from 'dotenv';
import solution from './solution/solution.js';
c();

process.argv.splice(0, 2);
let args = process.argv;
let config = JSON.parse(readFileSync('./config.json').toString());

// process.exit(0);
switch (args[0]?.toLowerCase()) {
  case 'set':
    config[args[1]] = args[2];
    writeFileSync('./config.json', JSON.stringify(config));
    console.log('Updated config');
    break;
  case 'run':
    let input = readFileSync('./solutions/day-1/input.txt').toString();
    console.log(solution[`part${args[1]}` as 'part1' | 'part2'](input));

    break;
  case 'input':
    axios
      .get(
        `https://adventofcode.com/${config.year}/day/${config.day}/input`,
        // { level: '2', answer: '10580' },
        { headers: { Cookie: `session=${process.env.SESSION};` } }
      )
      .then((res) => res.data)
      .then((data) => {
        writeFileSync(`./solutions/day-${config.day}/input.txt`, data.trim());
      })
      .catch(console.error);
    break;
  case 'save':
    if (!existsSync('./solutions')) mkdirSync(`./solutions`);
    if (!existsSync(`./solutions/day-${config.day}`)) mkdirSync(`./solutions/day-${config.day}`);
    readdirSync('./src/solution').forEach((file) => {
      console.log(file);
      copyFileSync(`./src/solution/${file}`, `./solutions/day-${config.day}/${file}`);
    });
    console.log('done');
    break;
  case 'clear':
    writeFileSync(
      './src/solution/solution.ts',
      `export default {
  part1: (input: string): number => {
    return 0;
  },
  part2: (input: string): number => {
    return 0;
  },
}`
    );
    writeFileSync(
      './src/solution/solution.test.ts',
      `import solution from './solution.js';
import test from 'ava';

test('part1', (t) => {});

test('part2', (t) => {});`
    );
    console.log('done');
    break;
  case 'load':
    copyFileSync(`./solutions/day-${args[1]}/solution.ts`, './src/solution/solution.ts');
    copyFileSync(`./solutions/day-${args[1]}/solution.test.ts`, './src/solution/solution.test.ts');
    console.log('done');
    break;
  default:
    console.log('Args required!');
}
