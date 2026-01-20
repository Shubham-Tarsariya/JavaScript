// Data Types:
// Two Types of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 12;
let b = a; // a --> 12
a = a + 3;
// types: string, number, boolean, null, undefined, symbol, bigint

// 2. Non-Primitive Data Types
// copy --> give refrence of parent
let temp_a = [1,2,3];
let temp_b = temp_a;
temp_b.pop(); // remove value
// types: object [], array {}, function ()




// <--------Primitive Data Types-------->
// types: string, number, boolean, null, undefined, symbol, bigint
// string:
// '' - single quotes
// "" - double quotes
// `` - backticks
let d = "name";
d = 'username';
d = `firstname`;

// number:
let e = 12;
e = 12.5;

// boolean:
let f = true;
f = false;

// null:
// you give a value
let g = null;

// undefined:
// you don't give a value, by default undefined
let h; 

// symbol:
// unique  immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1==u2; 
let obj ={uid: 1, name: "test", email:"test@test.com"};
let u3 = Symbol("uid");
obj[u3] = "001"

// bigint:
// check range of number, Number.MAX_SAFE_INTEGER
let number = 9007199254740991;
number = number + 9;
let num2 = 9007199254740991n;
num2 = num2 + 9n;



// <--------Non-Primitive Data Types-------->
// types: object {}, array [], function ()
let temp_array = ["name","age","phone number"];
// let obj = {name: "test", age: 21, phone_number:9988776655 }
function name(params){}

// Dynamic Typing 
let temp_d = "name";
temp_d = 123;
temp_d = {};
// JavaScript --> Javascript

// typeof quicks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number operations that why that type is number 
//ex. "hello" - 5 --> NaN

// type coeration
// "5" + 1
// "5" - 1


// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, document.all, -- false
// ex. !!0 -- check value is true or false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all --> true