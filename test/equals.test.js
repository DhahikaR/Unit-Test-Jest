test("test toBe", () => {
  const name = "Dhahika";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Dhahika");
});

test("test toEqual", () => {
  let person = { id: "dani" };
  Object.assign(person, { name: "dani" });

  expect(person).toEqual({ id: "dani", name: "dani" });
});
