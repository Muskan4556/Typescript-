// const user = {
//   name: "Muskan",
//   email: "muskan123@gmail.com",
//   isPaid: true,
//   isActive: true,
// };

// // pass object into the function or return from function

// // const createUser = ({ name: string, email: string, isPaid: boolean }) => {};

// // createUser({ name: "Muskan", email: "m123@gmail.com", isPaid: true });
// // createUser(user);

// // return object
// const createCourse = (): { name: string; price: number } => {
//   return {
//     name: "react.js",
//     price: 1000.0,
//   };
// };

// const user1 = {
//   name: "abc",
//   email: "abc123@gmail.com",
// };

//-----------------------------------------------------------------

// // Type aliases
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// // const createUser = (user: User) => {};
// // createUser(user1) // error - isActive is missing
// // createUser(user);
// // createUser({ name: "", email: "", isActive: false });

// // return object
// const createUser = (user: User): User => {
//   // return user;
//   // OR
//   return { name: "", email: "", isActive: false };
// };

//-------------------------------------------------------------------------------------

// READONLY and Optional

type User = {
  readonly _id: string; // now we are not able to manipulate this
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetail?: number; // want to make this optional - ?
};

let myUser: User = {
  _id: "123",
  name: "abc",
  email: "abc123@gmail.com",
  isActive: true,
};

myUser.email = "abc453@gmail.com";
// myUser._id = 478; // error - Cannot assign to '_id' because it is a read-only property.

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// combine existing type using "&"
type cardDetail = cardNumber &
  cardDate & {
    cardCVV: number;
  };

export {};
