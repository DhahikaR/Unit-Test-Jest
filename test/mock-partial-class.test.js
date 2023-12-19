import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

const repository = new UserRepository();
const service = new UserService(repository);

test("mock partial class findById", () => {
  const user = {
    id: 1,
    name: "dani",
  };
  const findByIdMock = jest.spyOn(repository, "findById");
  findByIdMock.mockReturnValueOnce(user);

  expect(findByIdMock(1)).toEqual(user);
  expect(findByIdMock).toHaveBeenCalled();
  expect(findByIdMock).toHaveBeenCalledWith(1);
});

test.failing("mock partial class findAll", () => {
  service.findAll();
});
