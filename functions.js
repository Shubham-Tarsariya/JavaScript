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