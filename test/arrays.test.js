test("arrays", () => {
  const names = ["Dhahika", "Rahmadani", "Antonio"];
  expect(names).toEqual(["Dhahika", "Rahmadani", "Antonio"]);
  expect(names).toContain("Rahmadani");
});
