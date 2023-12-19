import { getBalance } from "../src/async";

test("test async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1000);

  await expect(getBalance("dani", from)).resolves.toEqual({
    name: "dani",
    balance: 1000,
  });

  expect(from.mock.calls.length).toBe(1);
  expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("test mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("error"));

  await getBalance("dani", from);
});

test("test mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("rejected");

  expect(getBalance("dani", from)).rejects.toBe("rejected");
});
