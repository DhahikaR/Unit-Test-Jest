beforeAll(() => console.info("Before all outer"));
afterAll(() => console.info("After all outer"));
beforeEach(() => console.info("Before each outer"));
afterEach(() => console.info("After each outer"));

test("Test Outer", () => console.info("Test outer"));

describe("Inner", () => {
  beforeAll(() => console.info("Before all outer"));
  afterAll(() => console.info("After all outer"));
  beforeEach(() => console.info("Before each outer"));
  afterEach(() => console.info("After each outer"));

  test("Test inner", () => console.info("Test inner"));
});
