const sum = (a: number, b: number): number => {
  return a + b;
};

const res = sum(77, 88);

const getUpper = (str: string) => {
  return str.toUpperCase();
};

const res = getUpper("hello");
console.log(res);

const signUpUser = (name: string, email: string, isPaid: boolean) => {};

signUpUser(`Muskan`, `muskan123@gmail.com`, true);

// Default value - parameter
const loginUser = (name: string, email: string, isPaid: boolean = true) => {};

loginUser(`Muskan`, `muskan123@gmail.com`);

const getValue = (myVal: number): boolean | string => {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
};

const getHello = (s: string): string => {
  return "hello";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

const consoleError = (errMessage: string): void => {
  console.error(errMessage);
};

// never - Some function "never" return a value
// The never type represents values which are never observed. In a return type, this means that
// the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there's nothing left in a union.
const handleError = (msg: string): never => {
  throw new Error(msg);
};
