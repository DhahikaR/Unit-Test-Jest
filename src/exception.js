export class MyException extends Error {}

export const callMe = (name) => {
  if (name == "Dani") {
    throw new MyException("My exceptions happenes");
  } else {
    return "OK";
  }
};
