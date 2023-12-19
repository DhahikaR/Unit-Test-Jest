import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
  expect(sayHello("Dani")).toBe("Hello Dani");
});

test.failing("sayHello error", () => {
  sayHello(null);
});
