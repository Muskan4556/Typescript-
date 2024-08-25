// string
var greetings;
greetings = "   Hello,World!   ";
// greetings = true; // error TS - Type 'boolean' is not assignable to type 'String' .
console.log(greetings.trim());
// number - int/float
var id = 45;
// a ="hey"; // error TS - Type 'string' is not assignable to type 'number' .
console.log(id);
// boolean - true/false
var isEven = true;
console.log(isEven.valueOf());
