test("string.not", () => {
  const name = "Dhahika Rahmadani";

  expect(name).not.toBe("Anton");
  expect(name).not.toEqual("anton");
  expect(name).not.toMatch(/Anton/);
});

test("number.not", () => {
  const number = 2 + 2;

  expect(number).not.toBeGreaterThan(6);
  expect(number).not.toBeLessThan(3);
  expect(number).not.toBe(10);
});
