// var, let and const -- line by line comparison
// var (ES5)

var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; // never use
// let
let temp = "abc";
// const
const temp_const = "Hello World !!"

// declarations and initialization
var d; // declare
var d = 12; // declare and initialize for first time

// var add value into window
// var is function scoped
// var can be redeclared and reassigned
d = 24;
var d = "Hello"; // redeclar
// temp_const = "Hello"

// scope (globel, Block, functional)
var s = 23; // globel scope
{
    var s = 25; // block scope
    console.log("block Scope" + s);
}
function abc() {
    var s = 30; // functional scope
    console.log("functional scope " + s());
}
abc();
console.log(s);

/////////////////////////////////

var e = 23; // globel scope
{
    var e = 25; // block scope
    console.log("block Scope" + e);
}
function abc() {
    let e = 30; // functional scope
    console.log("functional scope " + e);
}
abc();
console.log(e);

// Temporal Dead Zone (TDZ)
// TDZ not working on var 
// console.log(temp_b);
// var temp_b = 24; // on var there is no TDZ

// console.log(j);
// let j = 12;

//Hoisting Imapact
// Hoisting --> when your create a variable into js that break into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d = undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck temp_d into line 70)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before initialization
// if you use console.log before initialization that give you error;
//Hosting Impace on var , let , const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/

// // Example:1
// console.log(nm);
// let nm = "name";
// //output: error
// // why: first declare variable after log

// // Example:2
// console.log(b);
// var b = "username";
// //output: error
// // why: first declare variable after log

// // Example:3
// var x = 1;
// {
//     var x = 2;
// }
// console.log(x);
// //output:2
// // why: block scope


// // Example:4
// let f = 10;
// {
//     let f = 20;
//     console.log("Inside:",f);
// }
// console.log("Outside:",f);
// //output:Inside: 20  Outside: 10

//Example:5
const person ={name: "demo" , gender: "male"};
// console.log(person);
// person.name="user";
// person ={};
// //output: error
//why: using const variable not change the value