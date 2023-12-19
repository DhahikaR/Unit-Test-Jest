import { MyException, callMe } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Dani")).toThrow;
  expect(() => callMe("Dani")).toThrow(MyException);
  expect(() => callMe("Dani")).toThrow("My exceptions happenes");
});

test("exception hot happens", () => {
  expect(callMe("Anto")).toBe("OK");
});
