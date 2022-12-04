let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet += alphabet.toUpperCase();

export default {
  part1: (input: string): number => {
    let sum = 0;
    for (let line of input.split('\n')) {
      let first = line.substring(0, line.length / 2);
      let second = line.substring(line.length / 2);

      loop: for (let a of first) {
        for (let b of second) {
          if (a == b) {
            sum += alphabet.indexOf(a) + 1;
            break loop;
          }
        }
      }
    }
    return sum;
  },
  part2: (input: string): number => {
    let sum = 0;
    let lines = input.split('\n');
    for (let i = 0; i < lines.length; i += 3) {
      loop: for (let a of lines[i]) {
        for (let b of lines[i + 1]) {
          for (let c of lines[i + 2]) {
            if (a == b && b == c) {
              sum += alphabet.indexOf(a) + 1;
              break loop;
            }
          }
        }
      }
    }
    return sum;
  },
};
