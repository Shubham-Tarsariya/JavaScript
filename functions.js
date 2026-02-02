// function
// what --> specific task. function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and resuable.
// how --> function keyword, name, parameters, body, return statement.

// type of functions:
// function name (params) {} --> function declaration
function abc(){}
// let fnc = function (){} --> function expression
let fnc = function() {}
// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {}

function temp_cart(){
    console.log("adding producat");
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

// parameters vs arguments
// parameters are the names listed in the function definition (params -->() ni andar lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni andar lakheli (pass) kareli values)
function cart (producat) { // product -- params
    console.log(`Adding ${producat}`)
}
cart("Laptop"); // laptop -- args
cart("Mac Book");
cart("S25 ultra");

function cart2(producat, price){
    console.log(`Adding ${producat} at ${price}`)
}
cart2("Laptop",50000);
cart2("Mac Book",250000);
cart2("S25 ultra",69000);

// Example: function buy colthes
function buy_clothes(clothe, size, price){
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
}   
buy_clothes("T-shirt","M",500);
buy_clothes("Jeans","32",1200);
buy_clothes("Shirt","L",800);

// convert into arrow function
// let fnc = () => {}
let buy_clothes1 = (clothe, size, price) => {
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
}   
buy_clothes1("T-shirt1","L",1000);

// convert into function expression
let buy_clothes2 = function(clothe, size, price){
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
}
buy_clothes2("T-shirt2","L",1500);

// Default, rest parameters in function
// Default
function abcd(b = 10, price = 0){
    console.log(price, b)
}
abcd(15);
// use case -- fees / flipkart -- platform fee

//rest
// Jayre function ma multiple arguments pass karva to vadhare params banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest --- > ... jo funtion na parameter ni anadar lakhvama aave chhe)

function def(a, b, c, d, e, f, g){
    console. log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7);

function def1(...number){ // ...number -- resert params
    console.log(number);
}
def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Example: buy colthes
function buy_clothes3(...details){
    console.log(details);
}   
buy_clothes3("T-shirt","M",500,"Blue","Cotton");

// early return --> function mathi jaldi bahar nikalva mate
function getValue1 (value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}
let result = getValue1(80);
console.log(result);

// first Class Function and their types:
// function can be treated as variables
// let temp_a = function() {} - first class function
const cart5 = function (producat, price) {
    console. log( `Adding ${producat} at ${price}` );
};
cart5("function expression - S25 ultra", 69000);

// function can be passed as arguments to other functions
function temp_b(fnc) {
    fnc();
}
temp_b(function fnc2() {
    console.log("First Class Function");
});

// function can be returned from other functions
function abcd() {
    return function () {
        console.log("function return other function")
    };
}
// abcd();
abcd()(); // call a function that retrun other function

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)

// function abcd(val){val();} -- > abcd(function(){console.log("hello")})
function hof_example(fnc){
    fnc();
}
hof_example(function(){
    console.log("Higher Order Function");
});
//function hof_example(fnc){} -- > Higher Order Function

// function abcd(){ return function(){} } abcd()() -- > higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function -> je function bahar na state ne modify na kare )
let a = 10;
function abcd_pure() {
    console.log("Hello");
}
// impure function -> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare)
function abcd_impure() {
    a++;
    console.log(a);
}

// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karshe parent function na koi variable) (function within function)
function outer() {
    let count = 0;
    function inner() {
        count++; // accessing outer (parent) function variable
        console.log(count);
    }
return inner;
}
let fnc3 = outer();
fnc3();

// lexical scope --> nested function can access variables declared in their outer scope
function outer1(){
    let outer_var = "outer function variable";
    function inner1(){
        let inner_var = "inner function variable";
        console.log(outer_var); // outer1 function variable write in console log
        function most_inner(){
            console.log(inner_var);
            console.log(outer_var);
            let most_inner_var = "most inner function variable";
            function abc(){
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();
}
outer1();

// IIFE - Immediately Invoked Function expression
(function () {})(); // function je declare karta j call thai jaye

(function (){
    console.log("This is IIFE function");
}())

// Hoisting in function
abcde();

function abcde(){
    console.log("This is Hoisting function");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//    console.log("Hoisted Function Expression called");
// }

// hoistedFunction2();
// let hoistedFunction2 = () => {
//    console.log("Hoisted Arrow Function called");
// }

//-------------------------------------------------------------------------

// Example:1 What's the difference between function declaration and function expression in terms of hoisting?

// output: Function Declaration: Fully hoisted (can be called before definition)
//         Function Expression: Not hoisted (cannot be called before assignment)
// why: Because function declarations are hoisted to the top of their scope, while function expressions are not hoisted and are treated as variables.

// Example:2 
greet();
function greet(){
    console.log("Hello!");
}
// output: Hello!
// why: Because function declarations are hoisted, allowing them to be called before their definition.

// Example:3 Convert normal function to Arrow Function
function add(a, b){
    return a + b;
}
// Arrow Function equivalent: const addArrow = (a, b) => a + b;
// output: add(2, 3) = 5
// why: Both functions perform the same addition operation and return the sum.

// Example:4
function welcome(name){
    console.log("Welcome " + name);
}
welcome("user");
// output: Welcome user
// why: The function concatenates the string "Welcome " with the provided name and logs it to the console.

// Example:5
function temp (a, b, c){
    console.log(a,b,c);
}
temp(1, 2)
// output: 1 2 undefined
// why: Because only two arguments are passed, the third parameter 'c' is undefined.

// Example:6
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();
// output: Hello Guest
// why: Because no argument is passed, the default value "Guest" is used for the parameter 'name'.

// Example:7
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5)
// output: [1, 2, 3, 4, 5]
// why: Because the rest parameter 'numbers' collects all arguments into an array.

// Example:8
function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}
calculateTotal(10, 20 ,30 ,40 ,50)
let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)
// output: 150
// why: Because the function sums all the scores passed as arguments and returns the total.

// Example:9 
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}
// output: checkAge(21) = Access Granted
// why: Because the age 21 is greater than 18, so the function logs "Access Granted".

// Example:10
function f(){ return;}
// output: undefined
// why: Because the function has no return value, it implicitly returns undefined.

// Example:11
// What does is mean when we say "functions are first-class citizens"?
// Answer: Functions can be treated like any other variable. They can be assigned to variables, passed as arguments to other functions, and returned from other functions.
// why: This allows for higher-order functions and functional programming techniques.

// Example:12
let s = function(){console.log("Hello");};
s();
// output: Hello
// why: Because the function expression is assigned to the variable 's', and calling 's()' invokes the function, logging "Hello" to the console.

// Example:13
function abcdef(val){val()}
abcdef(function(){ console.log("Hello")})
// output: Hello
// why: Because the function 'abcdef' takes another function as an argument and invokes it, resulting in "Hello" being logged to the console.

// Example:14
// What is higer order function?
// Answer: A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result.
// why: This allows for more abstract and flexible code, enabling functional programming patterns.

// Example:16
let total = 5;
function num(num){
total += num;
}
num(3);
// output: total = 8
// why: Because the function 'num' modifies the outer variable 'total' by adding the passed argument to it.

// Example:17 convert example 16 function into pure function?
let total1 = 5;
function num1(total1, num){
    return total1 + num;
}
let newTotal = num1(total1, 3);
// output: newTotal = 8, total1 = 5
// why: Because the pure function 'num1' does not modify the outer variable 'total1' and instead returns a new value based on its inputs.

// Example:18 What is Closure? When is it created?
// Answer: A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. It is created when a function is defined inside another function and the inner function references variables from the outer function.
// Example:
function outerFunc() {
    let outerVar = "I am from outer function";
    function innerFunc() {
        console.log(outerVar);
    }
    return innerFunc;
}
let closureFunc = outerFunc();
closureFunc();
// output: I am from outer function

// Example:19
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
// output: 1 2
// why: Because the inner function forms a closure that retains access to the 'count' variable from the outer function, allowing it to increment and log the count each time it is called.

// Example:20
(function init(){
    console.log("Initialized");
})();
// output: Initialized
// why: Because the IIFE (Immediately Invoked Function Expression) is executed immediately after its definition, logging "Initialized" to the console.

// Example:21
let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})();
fun.setScore(10);
fun.getScore();
// output: 10
// why: Because the IIFE returns an object with methods that can access and modify the private variable 'score' through closure.

// Example:22
// temp_var();
// var temp_var = function(){
//     console.log("Hello");
// }
// output: TypeError: temp_var is not a function
// why: Because function expressions are not hoisted, so 'temp_var' is undefined at the time of the call, leading to a TypeError.

// Example:23
temp_var();
function temp_var(){
    console.log("Hello");
}
// output: Hello
// why: Because function declarations are hoisted, allowing 'temp_var' to be called before its definition.