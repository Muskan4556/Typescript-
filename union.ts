let deliveryTime: number | string = 33;

deliveryTime = 48;
deliveryTime = "36";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let muskan: User | Admin = {
  name: "muskan",
  id: 48448231,
};

muskan = {
  username: "abc",
  id: 1623184,
};

// const getDbId = (id: number | string) => {
//   // API calls
//   console.log(`DB id is: ${id}`);
// };

const getDbId = (id: number | string) => {
  //   id.toLowerCase(); // error - Property •toLowerCase• does not exist on type •string I number • .e Property •toLowerCase• does not exist on type 'number' .
  if (typeof id === "string") {
    id.toLowerCase();
  } else if (typeof id === "number") {
    id = id + 4;
  }
};

getDbId(33);
getDbId("4564");

// array

const data: number[] | string[] = [1, 2, 3, "4"]; // error
const data2: (number | string | boolean)[] = [1, 2, "3", true];
const data3: any[] = [1, 2, "3", true];

let pi = 3.14 as 3.14;
let pi2 = 3.14 as const;
let pi3: 3.14 = 3.14;
pi3 = 3.145;

// use case - seat allotment can be only of 3 types
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
seatAllotment = "crew";
