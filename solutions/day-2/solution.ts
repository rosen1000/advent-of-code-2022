export default {
  part1: (input: string): number => {
    let lines = input.split('\n');
    let score = 0;
    for (let line of lines) {
      if (winLines.includes(line)) {
        score += 6;
      }
      if (drawLines.includes(line)) {
        score += 3;
      }
      if (line.includes('X')) score += Me.X;
      if (line.includes('Y')) score += Me.Y;
      if (line.includes('Z')) score += Me.Z;
    }
    return score;
  },
  part2: (input: string): number => {
    let lines = input.split('\n');
    let score = 0;
    for (let line of lines) {
      score += part2Mappings[line as keyof typeof part2Mappings];
    }
    return score;
  },
};

const LOSS     = 0,
      DRAW     = 3,
      WIN      = 6,
      ROCK     = 1,
      PAPER    = 2,
      SCISSORS = 3;

const part2Mappings = {
  'A X': SCISSORS + LOSS,
  'A Y': ROCK + DRAW,
  'A Z': PAPER + WIN,
  'B X': ROCK + LOSS,
  'B Y': PAPER + DRAW,
  'B Z': SCISSORS + WIN,
  'C X': PAPER + LOSS,
  'C Y': SCISSORS + DRAW,
  'C Z': ROCK + WIN,
};

let winLines  = ['A Y', 'B Z', 'C X'];
let drawLines = ['A X', 'B Y', 'C Z'];

const Me = {
  X: 1,   // Rock
  Y: 2,   // Paper
  Z: 3,   // Scissors
};
