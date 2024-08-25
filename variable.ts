// string
let greetings: string;
greetings = "   Hello,World!   ";
// greetings = true; // error TS - Type 'boolean' is not assignable to type 'String' .
console.log(greetings.trim());

// number - int/float
let id: number = 45;
// a ="hey"; // error TS - Type 'string' is not assignable to type 'number' .
console.log(id);

// boolean - true/false
let isEven: boolean = true;
console.log(isEven);

// any
let value: string;

function xyz(){
    return "78";
}

value = xyz()