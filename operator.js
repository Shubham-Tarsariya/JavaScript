// operators
// Arithmetic, comparison, logical, assignment, unary, ternary

// ------------------------------------------------------------
// Arithmetic Operators
// +, -, /, *, **, %

// + --> Add and concatenation
// Example. 1+2, "user" + "name"
// output: 3 , username

// -
// Example. 2-1
// output: 1

// /, *
// Example. 240/2 , 25*2
// output: 120 , 50

// % (modulus)(sheshfal)
// Example. 12%4
// output: 0
// Example. 9%2
// output: 1

// **(square) (exposination)
// Example. 2**3 
// output: 8

// -------------------------------------------------------------------------------------
// Comparison Operators (ans: true, false)
// =
// Example. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)
// output: false, true

// ====
// Example. 12 === "12" (check type and value, strict comparaison)
// output: false

// !=
// Example. 12 != 13 (reverse of ==, not strict comparison)
// output: true

// !==
// Example. 12!== "12" (reverse of ===)
// output: true

// >=
// Example. 22 >= 22
// output: true

// <=
// Example. 13 <= 13
// output: true

// <
// Example. 12 < 113, 12 < 9, 22 < 22
// output: true, false, false

// >
// Example. 12 > 113, 12 > 9, 13 > 13
// output: false, true, false

// -----------------------------------------------------------------------------
// Assignment Operators
// =
// give a value, value assignment operator
// Example. let a = 12;
// output: a = 12

// +=
// Example. a += 3; (add value into old value and save it into a)
// output: a = 15

// -=
// Example. a -= 4; (subtract value from old value and save it into a)
// output: a = 11

// *=
// Example. a *= 2; 
// output: a = 24

// /=
// Example. a /= 2;
// output: a = 12

// %=
// Example. a %= 2;
// output: a = 0

// -----------------------------------------------------------------------------
// Logical Operators
// && (AND)
// Example. true && ture; 12<13 && 14<15; false && true; 12<10 && 14<15; true && false; false && false
// output: true, true, false, false, false, false

// || (OR)
// Example. true || true; false || true; true || false; false || false;
// output: true, true, true, false

// ! (NOT)
// Example. !true; !false; !12; !!12;
// output: false, true, false, true

// -----------------------------------------------------------------------------
// Unary Operators
// + - ! typeof ++ --

// +
// convert string to number
// Example. +"5"; +"Name"
// output: 5, NaN

// -
// Example. -"5"
// output: -5

// !
// Example. !12
// output: false

// typeof
// Example. typeof "name"
// output: string

// ++
// Example. let a = 12; 
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. a++ + a => 26

// --
// Example. let b = 3; 
// b--; 
// b++
// output: 2, 3

// -----------------------------------------------------------------------------
// Ternary Operator
// condition ? true thase to print thase: false thase to print thase
// Example. let a = 12>13 ? console.log("true"): console.log("false");
// output: false

//-----------------------------------------------------------------------------
// typeof null --> object
// typeof --> object, let a =[]; a instanceof Array --> true
// instanceof --> check type of reference data type
// don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference data type mate use karvo

// Example:1
let x = 10;
let y = 20;
if(x>5 && y>5){
    console.log("Both are greater than 5");
}
else{
    console.log("one or both are not greater than 5");
}
// output: Both are greater than 5
// why: both condition true

// Example:2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}
// output: Acess granted
// why: one condition true

// Example:3
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}
// output: Pleasant day
// why: condition false

// Example:4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}
// output: Falsy value
// why: 0 is falsy value

// Example:5
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
// output: Grade: C
// why: score 78 is greater than 70

// Example:6
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
// output: Status: Gold
// why: points 120 is greater than 100

// Example:7
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
// output: access: Deny
// why: hasToken is false

// Example:8
let b = 5;
b++;
console.log(b);
// output: 6
// why: increment by 1

// Example:9
let c = 8;
++c;
console.log(c);
// output: 9
// why: increment by 1

// Example:10
let d = 4;
let e = d++;
console.log(d, e);
// output: 5, 4
// why: d is post incremented

// Example:11
let f = 4;
let g = ++f;
console.log(f, g);
// output: 5, 5
// why: f is pre incremented

// Example:12
let m = 10;
console.log(m--);
console.log(m);
// output: 10, 9
// why: m is post decremented

// Example:13
let n = 5;
let result = n++ + ++n;
console.log(result);
// output: 12
// why: first n++ = 5, then ++n = 7, so 5 + 7 = 12

// Example:14
let likes = 100;
function likePost(){
    result = ++likes;
}
console.log(likePost());
console.log(likes);
// output: undefined 101
// why: function likePost does not return a value, likes is pre incremented

// Example:15
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
// output: Matched
// why: count-- returns 5 before decrementing