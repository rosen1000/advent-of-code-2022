function range(to: number): number[];
function range(from: number, to: number): number[];
function range(from: number, to?: number) {
  if (!to) {
    to = from;
    from = 0;
  }
  if (from > to) {
    let temp = from;
    from = to;
    to = temp;
  }
  let arr = [];
  for (from; from < to; from++) arr.push(from);
  return arr;
}

export { range };
