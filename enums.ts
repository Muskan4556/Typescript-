// In TypeScript, enums are a way to define a set of named constants. They provide a way to give more meaningful names to numeric values or strings, making the code more readable and maintainable.
// use cases -
// restrict choice with values offered
// e-commerce - restrict order status : wishlist | cart | shipped | delivered | return
// plane ticket booking - restrict seat - window | middle | aisle

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if(seat === 0){}

const enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const seat = SeatChoice.AISLE;
