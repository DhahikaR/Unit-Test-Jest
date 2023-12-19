test("string", () => {
  const name = "Dhahika Rahmadani";

  expect(name).toBe("Dhahika Rahmadani");
  expect(name).toMatch(/ani/);
});
