// Situation
// // user array should store values in specific order. for eg. string, number , boolean
// const user: (string | number)[] = ["abc", 1];

// // specific order
const user2: [string, number, boolean] = ["abc", 1, true];

const user3: [string, number, boolean] = ["abc", true, 1]; // error

const rgb: [number, number, number] = [255, 254, 255];
const rgb2: [number, number, number] = [255, 254, 255, 0.5]; // error

type User = [number, string, boolean];

const newUser: User = [45, "abc", true]



