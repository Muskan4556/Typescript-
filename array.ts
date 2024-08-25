const arr: string[] = [];
// const arr1: number[] = [];
// OR
const arr1: Array<number> = [];

// arr.push("thor"); // error - Argument of type 'string' is not assignable to parameter of type 'never' .

arr.push("thor");

arr1.push(46, 456, 4654);

type User = {
  readonly _id: string; // now we are not able to manipulate this
  name: string;
  isActive: boolean;
  creditCardDetail?: number; // want to make this optional - ?
};

const allUsers: User[] = [];

allUsers.push({ _id: "457", name: "abc", isActive: true });

// Array inside array
const MLModels: number[][] = [
  [255, 255, 255],
  [255, 0, 0],
];
