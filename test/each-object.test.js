import { sumAll } from "../src/sum.js";

const table = [
  {
    numbers: [10, 10, 10],
    expected: 30,
  },
  {
    numbers: [10, 10, 10, 10, 10],
    expected: 50,
  },
  {
    numbers: [10, 10, 10, 10, 10, 10, 10],
    expected: 70,
  },
];
test.each(table)('test sumAll(%s) should result %i', ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected)
})