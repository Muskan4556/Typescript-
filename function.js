var sum = function (a, b) {
    return a + b;
};
var res = sum(77, 88);
var getUpper = function (str) {
    return str.toUpperCase();
};
var res = getUpper("hello");
console.log(res);
var signUpUser = function (name, email, isPaid) { };
signUpUser("Muskan", "muskan123@gmail.com", true);
// Default value - parameter
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
};
loginUser("Muskan", "muskan123@gmail.com");
var getValue = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
};
var getHello = function (s) {
    return "hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) { return (console.log(hero)); });
