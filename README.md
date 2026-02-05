<h1>JavaScript: var, let, and const</h1>

<p>
This README explains the difference between <b>var</b>, <b>let</b>, and <b>const</b> in JavaScript
with examples, scope behavior, hoisting, and Temporal Dead Zone (TDZ).
</p>

<hr>

<h2>1. Variable Declarations</h2>

<pre>
var a = "temp";
var _123 = "Hello";
var $123 = "Hello";
b = 24; // never use
</pre>

<h2>2. let and const</h2>

<pre>
let temp = "abc";
const temp_const = "Hello World !!";
</pre>

<h2>3. Declaration and Initialization</h2>

<pre>
var d;        // declaration
var d = 12;   // declaration + initialization
</pre>

<ul>
    <li><b>Declaration</b>: variable name is created</li>
    <li><b>Initialization</b>: value is assigned</li>
</ul>

<hr>

<h2>4. Redeclaration and Reassignment</h2>

<pre>
d = 24;
var d = "Hello"; // redeclared
// temp_const = "Hello"  //  Error
</pre>

<ul>
    <li><b>var</b> can be redeclared and reassigned</li>
    <li><b>let</b> can be reassigned but not redeclared in same scope</li>
    <li><b>const</b> can neither be redeclared nor reassigned</li>
</ul>

<hr>

<h2>5. Scope Example using var</h2>

<pre>
var s = 23; // global scope
{
    var s = 25; // block scope (ignored)
    console.log("block scope " + s);
}
console.log(s);
</pre>

<pre>
function abc() {
    var s = 30; // functional scope
    console.log("functional scope " + s());
}
abc();
console.log(s);
</pre>

<h2>6. Scope Example using let</h2>

<pre>
var e = 23;
{
    var e = 25;
    console.log("block scope " + e);
}

function abc() {
    let e = 30;
    console.log("functional scope " + e);
}

abc();
console.log(e);
</pre>

<ul>
    <li><b>let</b> is block scoped</li>
    <li>Function scope works correctly with let</li>
</ul>

<hr>

<h2>7. Temporal Dead Zone (TDZ)</h2>

<pre>
console.log(temp_b);
var temp_b = 24;
</pre>

<p>
No error. Output is <b>undefined</b> because <b>var has no TDZ</b>.
</p>

<pre>
console.log(j);
let j = 12;
</pre>

<p>
This throws an error due to <b>Temporal Dead Zone</b>.
</p>

<hr>

<h2>8. Hoisting Impact</h2>

<pre>
var temp_d = 12;
</pre>

<p>
Internally:
</p>

<pre>
var temp_d = undefined;
temp_d = 12;
</pre>

<ul>
    <li><b>var</b> → hoisted as <code>undefined</code></li>
    <li><b>let</b> → hoisted but inaccessible (TDZ error)</li>
    <li><b>const</b> → hoisted but inaccessible (TDZ error)</li>
</ul>

<hr>

<h2>9. Hoisting Summary Table</h2>

<pre>
var   → hoist → undefined
let   → hoist → error
const → hoist → error
</pre>


<h1>JavaScript Data Types</h1>

<p>JavaScript data types are divided into <strong>two main categories</strong>:</p>

<ul>
    <li><strong>Primitive Data Types</strong></li>
    <li><strong>Non-Primitive (Reference) Data Types</strong></li>
</ul>

<hr>

<h2>1. Primitive Data Types</h2>

<p>Primitive data types store <strong>real values</strong>.  
When copied, the <strong>value is copied</strong>, not the reference.</p>

<h3>Example</h3>
<pre><code>
let a = 12;
let b = a;   // value copied
a = a + 3;
</code></pre>

<h3>Types of Primitive Data Types</h3>
<ul>
    <li>string</li>
    <li>number</li>
    <li>boolean</li>
    <li>null</li>
    <li>undefined</li>
    <li>symbol</li>
    <li>bigint</li>
</ul>

<hr>

<h3>String</h3>
<p>Strings represent textual data.</p>
<pre><code>
let d = "name";
d = 'username';
d = `firstname`;
</code></pre>

<hr>

<h3>Number</h3>
<p>Used for integers and floating-point numbers.</p>
<pre><code>
let e = 12;
e = 12.5;
</code></pre>

<hr>

<h3>Boolean</h3>
<p>Represents true or false.</p>
<pre><code>
let f = true;
f = false;
</code></pre>

<hr>

<h3>Null</h3>
<p>Represents an intentional empty value.</p>
<pre><code>
let g = null;
</code></pre>

<hr>

<h3>Undefined</h3>
<p>A variable declared but not assigned a value.</p>
<pre><code>
let h;
</code></pre>

<hr>

<h3>Symbol</h3>
<p>Symbols create <strong>unique and immutable</strong> values.</p>
<pre><code>
let u1 = Symbol("uid");
let u2 = Symbol("uid"); // u1 !== u2

let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "001";
</code></pre>

<hr>

<h3>BigInt</h3>
<p>Used for very large integers beyond <code>Number.MAX_SAFE_INTEGER</code>.</p>
<pre><code>
let number = 9007199254740991;
number = number + 9;

let num2 = 9007199254740991n;
num2 = num2 + 9n;
</code></pre>

<hr>

<h2>2. Non-Primitive Data Types</h2>

<p>Non-primitive data types store <strong>references</strong>.  
When copied, they point to the <strong>same memory location</strong>.</p>

<h3>Example</h3>
<pre><code>
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // affects temp_a also
</code></pre>

<h3>Types of Non-Primitive Data Types</h3>
<ul>
    <li>Object <code>{}</code></li>
    <li>Array <code>[]</code></li>
    <li>Function <code>()</code></li>
</ul>

<hr>

<h3>Array</h3>
<pre><code>
let temp_array = ["name", "age", "phone number"];
</code></pre>

<hr>

<h3>Object</h3>
<pre><code>
let obj = {
    name: "test",
    age: 21,
    phone_number: 9988776655
};
</code></pre>

<hr>

<h3>Function</h3>
<pre><code>
function name(params) {
    // function body
}
</code></pre>

<hr>

<h2>Dynamic Typing</h2>

<p>JavaScript is a <strong>dynamically typed language</strong>, meaning variable types are determined at runtime.</p>

<pre><code>
let x = 10;
x = "Hello";
x = true;
</code></pre>

<hr>

<h2> typeof – Quick Checks</h2>

<p>
The <code>typeof</code> operator is used to <strong>check the type of a variable</strong>.
</p>

<pre>
typeof 12          // "number"
typeof NaN         // "number"
typeof null        // "object"
typeof "hello"     // "string"
typeof true        // "boolean"
</pre>

<h3>Important typeof Quirks</h3>

<ul>
  <li><strong>typeof NaN → number</strong></li>
  <li><strong>typeof null → object</strong></li>
</ul>

<p>
<strong>Why typeof NaN is number?</strong><br>
NaN means <em>Not a Number</em>, but it is the result of a <strong>failed numeric operation</strong>,
so JavaScript still treats it as a number type.
</p>

<pre>
"hello" - 5   // NaN
typeof ("hello" - 5) // "number"
</pre>

<hr>

<h2>Comparison Examples</h2>

<pre>
1 + "1"    // "11"
1 == "1"   // true
1 === "1"  // false
</pre>

<ul>
  <li><code>==</code> → compares value only (type coercion happens)</li>
  <li><code>===</code> → compares value and type (strict comparison)</li>
</ul>

<hr>

<h2>Type Coercion</h2>

<p>
<strong>Type coercion</strong> means JavaScript automatically converts one data type
into another during operations.
</p>

<h3>Example 1: String + Number</h3>

<pre>
"5" + 1
</pre>

<p><strong>Output:</strong> "51"</p>
<p><strong>Reason:</strong> <code>+</code> operator performs string concatenation.</p>

<h3>Example 2: String - Number</h3>

<pre>
"5" - 1
</pre>

<p><strong>Output:</strong> 4</p>
<p><strong>Reason:</strong> <code>-</code> operator converts string to number.</p>

<hr>

<h2>Truthy vs Falsy Values</h2>

<p>
In JavaScript, values are automatically converted to <strong>true</strong> or
<strong>false</strong> in conditional statements.
</p>

<h3> Falsy Values (Only These Are False)</h3>

<ul>
  <li>0</li>
  <li>false</li>
  <li>"" (empty string)</li>
  <li>null</li>
  <li>undefined</li>
  <li>NaN</li>
  <li>document.all (special case)</li>
</ul>

<pre>
!!0          // false
!!null       // false
!!NaN        // false
</pre>

<hr>

<h3> Truthy Values</h3>

<p>
<strong>All values except falsy values are truthy.</strong>
</p>

<pre>
!!-1        // true
!!1         // true
!!"JS"      // true
!![]        // true
!!{}        // true
</pre>

<hr>

<h1> JavaScript Operators </h1>

<p>
This document explains all major <strong>JavaScript Operators</strong> with
examples and outputs. It is useful for <strong>beginners, interview preparation,
and revision</strong>.
</p>

<hr>

<h2>1. Arithmetic Operators</h2>
<ul>
  <li><strong>+</strong> → Addition / Concatenation</li>
  <li><strong>-</strong> → Subtraction</li>
  <li><strong>*</strong> → Multiplication</li>
  <li><strong>/</strong> → Division</li>
  <li><strong>%</strong> → Modulus (Remainder)</li>
  <li><strong>**</strong> → Exponentiation (Power)</li>
</ul>

<pre>
1 + 2        // 3
"user" + "name"  // username
12 % 4       // 0
2 ** 3       // 8
</pre>

<hr>

<h2>2. Comparison Operators (Result: true / false)</h2>
<ul>
  <li><strong>==</strong> → Value comparison (not strict)</li>
  <li><strong>===</strong> → Value + Type comparison (strict)</li>
  <li><strong>!=</strong> → Not equal</li>
  <li><strong>!==</strong> → Strict not equal</li>
  <li><strong>&gt; , &lt; , &gt;= , &lt;=</strong></li>
</ul>

<pre>
12 == "12"   // true
12 === "12"  // false
12 != 13     // true
22 >= 22     // true
</pre>

<hr>

<h2>3. Assignment Operators</h2>
<ul>
  <li><strong>=</strong></li>
  <li><strong>+=</strong></li>
  <li><strong>-=</strong></li>
  <li><strong>*=</strong></li>
  <li><strong>/=</strong></li>
  <li><strong>%=</strong></li>
</ul>

<pre>
let a = 12;
a += 3;   // 15
a -= 4;   // 11
a *= 2;   // 24
</pre>

<hr>

<h2>4. Logical Operators</h2>
<ul>
  <li><strong>&&</strong> → AND</li>
  <li><strong>||</strong> → OR</li>
  <li><strong>!</strong> → NOT</li>
</ul>

<pre>
true && false   // false
true || false   // true
!true           // false
</pre>

<hr>

<h2> 5. Unary Operators</h2>
<ul>
  <li><strong>+</strong> → Convert string to number</li>
  <li><strong>-</strong> → Negation</li>
  <li><strong>!</strong> → Logical NOT</li>
  <li><strong>typeof</strong></li>
  <li><strong>++</strong> → Increment</li>
  <li><strong>--</strong> → Decrement</li>
</ul>

<pre>
+"5"        // 5
typeof "JS" // string
let a = 5;
a++;        // 6
</pre>

<hr>

<h2> 6. Ternary Operator</h2>

<pre>
condition ? trueValue : falseValue
</pre>

<pre>
let score = 78;
let grade = score >= 90 ? "A" :
            score >= 80 ? "B" :
            score >= 70 ? "C" : "D";
// Output: C
</pre>

<hr>

<h2> Important JavaScript Facts</h2>
<ul>
  <li><strong>typeof null</strong> → object</li>
  <li><strong>typeof NaN</strong> → number</li>
  <li><strong>typeof</strong> → Use for primitive types</li>
  <li><strong>instanceof</strong> → Use for reference types</li>
</ul>

<pre>
let arr = [];
arr instanceof Array // true
</pre>

<hr>

<h2> Logical Examples</h2>

<pre>
let x = 10, y = 20;
if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
}
</pre>

<pre>
let count = 5;
if (count-- === 5) {
  console.log("Matched");
}
</pre>

<hr>
<h1>Control Flow Statements in JavaScript</h1>

<p>
Control flow statements allow you to control the execution flow of your JavaScript code
based on conditions and logic.
</p>

<hr>

<h2>1️ If Statement</h2>

<pre><code>
if (12 &lt; 13) {
    console.log(true);
}

if (15 &lt; 13) {
    console.log(true);
}

// condition is false, so this will not run

if (!12) {
    console.log("number");
}
</code></pre>

<div class="note">
<strong>Note:</strong> Numbers except <code>0</code> are truthy in JavaScript.
</div>

<hr>

<h2> If-Else Statement</h2>

<pre><code>
if (12 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 &lt; 13) {
    console.log(true);
} else {
    console.log(false);
}

if (!12) {
    console.log("Number");
} else {
    console.log("Not A Number");
}
</code></pre>

<hr>

<h2> If – Else If – Else Statement</h2>

<pre><code>
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
</code></pre>

<pre><code>
if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
</code></pre>

<hr>

<h2> Switch Case Statement</h2>

<pre><code>
switch ('First50') {
    case 'First50':
        console.log("50% off on First Order");
        break;
    case 'BOGO':
        console.log("Buy one get one");
        break;
    case 'BlackFriday':
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;
    default:
        console.log("Offer Not Valid");
        break;
}
</code></pre>

<pre><code>
switch ('Day4') {
    case 'Day1':
        console.log("Monday");
        break;
    case 'Day2':
        console.log("Tuesday");
        break;
    case 'Day3':
        console.log("Wednesday");
        break;
    default:
        console.log("Thursday");
        break;
}
</code></pre>

<hr>

<h2>Early Return Pattern</h2>

<pre><code>
function score(value) {
    if (value &gt; 90) {
        return "Value is more than 90";
    } else if (value &lt; 80) {
        return "Value is less than 80";
    } else if (value &lt; 70) {
        return "Value is less than 70";
    } else if (value &lt; 60) {
        return "Value is less than 60";
    } else {
        return "Value is less than 60";
    }
}
</code></pre>

<pre><code>
function score2(value) {
    if (value &lt; 60) return "Value is less than 60";
    else if (value &lt; 70) return "Value is less than 70";
    else if (value &lt; 80) return "Value is less than 80";
    else if (value &lt; 90) return "Value is less than 90";
    else return "Value is more than 90";
}
</code></pre>

<hr>

<h2> Rock Paper Scissors Example</h2>

<pre><code>
function rps(user, computer) {
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";
    if (user === "scissor" && computer === "rock") return "computer wins";
    if (user === "rock" && computer === "paper") return "computer wins";
    if (user === "paper" && computer === "scissor") return "computer wins";
    return "it's a tie";
}
</code></pre>

<hr>

<h2> Switch Fall-Through Example</h2>

<pre><code>
let x = 2;
switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
</code></pre>

<p><strong>Output:</strong> Two Three</p>

<hr>

<h2>Grade Calculation Example</h2>

<pre><code>
function getGrade(score) {
    if (score &gt;= 90 && score &lt;= 100) return "A+";
    else if (score &gt;= 80 && score &lt; 89) return "A";
    else if (score &gt;= 70 && score &lt; 79) return "B";
    else if (score &gt;= 60 && score &lt; 69) return "C";
    else if (score &gt;= 33 && score &lt; 59) return "D";
    else if (score &gt;= 0 && score &lt; 32) return "Fail";
    else return "Invalid Marks";
}
</code></pre>

<hr>

<h1> JavaScript Loops</h1>

<p>
Loops are used to <strong>repeat a block of code multiple times</strong>.
They are very useful when you need to perform the same task again and again.
</p>

<hr>

<h2>🔹 Why Use Loops?</h2>
<ul>
    <li>To avoid writing repeated code</li>
    <li>To execute code multiple times automatically</li>
    <li>Best for working with numbers, arrays, and conditions</li>
</ul>

<hr>

<h2> For Loop</h2>

<p>
Use a <strong>for loop</strong> when you know <strong>how many times</strong>
the loop should run.
</p>

<p><strong>Syntax:</strong></p>

<pre><code>
for (start; condition; change) {
    // code
}
</code></pre>

<p><strong>Example: Print 1 to 10</strong></p>

<pre><code>
for (let i = 1; i &lt;= 10; i++) {
    console.log(i);
}
</code></pre>

<p><strong>Example: Print 20 to 10 (reverse)</strong></p>

<pre><code>
for (let i = 20; i &gt;= 10; i--) {
    console.log(i);
}
</code></pre>

<div class="note">
<strong>Gujarati Hint:</strong><br>
kaya thi javanu chhe → kaya sudhi javanu chhe → kevi rite javanu chhe
</div>

<hr>

<h2> While Loop</h2>

<p>
Use a <strong>while loop</strong> when you <strong>do not know</strong>
how many times the loop will run.
</p>

<p><strong>Syntax:</strong></p>

<pre><code>
start;
while (condition) {
    // code
    change;
}
</code></pre>

<p><strong>Example:</strong></p>

<pre><code>
let j = 10;
while (j &lt;= 20) {
    console.log("j :", j);
    j++;
}
</code></pre>

<p><strong>Reverse Example:</strong></p>

<pre><code>
let k = 50;
while (k &gt;= 20) {
    console.log(k);
    k--;
}
</code></pre>

<hr>

<h2> Do While Loop</h2>

<p>
The <strong>do while loop</strong> executes the code <strong>at least once</strong>,
even if the condition is false.
</p>

<p><strong>Syntax:</strong></p>

<pre><code>
start;
do {
    // code
    change;
} while (condition);
</code></pre>

<p><strong>Example: Print 10 to 20</strong></p>

<pre><code>
let g = 10;
do {
    console.log("do while:", g);
    g++;
} while (g &lt;= 20);
</code></pre>

<p><strong>Example: Print 10 to 1</strong></p>

<pre><code>
let h = 10;
do {
    console.log("do while1:", h);
    h--;
} while (h &gt;= 1);
</code></pre>

<hr>
<h2>1. break Statement</h2>
    <p>
        The <strong>break</strong> statement is used to immediately stop the loop
        when a specific condition is met.
    </p>

    <pre><code>
// Example 1: Stop loop when value reaches 32
for (let k = 1; k &lt;= 201; k++) {
    console.log(k);
    if (k === 32) {
        break;
    }
}
    </code></pre>

    <pre><code>
// Example 2: Reverse loop with break
for (let k = 64; k &gt;= 1; k--) {
    console.log(k);
    if (k === 32) {
        break;
    }
}
    </code></pre>

    <div class="note">
        <strong>Use break</strong> when you want to exit the loop completely.
    </div>

<hr>

<h2>2. continue Statement</h2>
    <p>
        The <strong>continue</strong> statement skips the current iteration
        and moves to the next loop cycle.
    </p>

    <pre><code>
// Example 1: Skip number 5
for (let a = 1; a &lt;= 10; a++) {
    if (a === 5) {
        continue;
    }
    console.log(a);
}
    </code></pre>

    <pre><code>
// Example 2: Reverse loop skipping 5
for (let h = 10; h &gt;= 1; h--) {
    if (h === 5) {
        continue;
    }
    console.log(h);
}
    </code></pre>

    <hr>

<h1>JavaScript Functions – README</h1>

<p>
A <strong>function</strong> is a block of code that performs a specific task.
Functions help in avoiding code repetition and make code reusable and modular.
</p>

<hr>

<h2>Why Use Functions?</h2>
<ul>
    <li>Avoid code repetition</li>
    <li>Improve readability</li>
    <li>Make code modular & reusable</li>
</ul>

<hr>

<h2>Types of Functions</h2>

<h3>1. Function Declaration</h3>
<pre><code>
function abc() {}
</code></pre>

<h3>2. Function Expression</h3>
<pre><code>
let fnc = function () {};
</code></pre>

<h3>3. Arrow Function (Fat Arrow)</h3>
<pre><code>
let fnc1 = () => {};
</code></pre>

<hr>

<h2>Basic Function Example</h2>
<pre><code>
function temp_cart() {
    console.log("adding product");
}

temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");
</code></pre>

<hr>

<h2>Parameters vs Arguments</h2>
<ul>
    <li><strong>Parameters</strong> → variables listed in function definition</li>
    <li><strong>Arguments</strong> → real values passed during function call</li>
</ul>

<pre><code>
function cart(product) { // parameter
    console.log(`Adding ${product}`);
}

cart("Laptop"); // argument
cart("Mac Book");
cart("S25 Ultra");
</code></pre>

<hr>

<h2>Multiple Parameters</h2>
<pre><code>
function cart2(product, price) {
    console.log(`Adding ${product} at ${price}`);
}

cart2("Laptop", 50000);
cart2("Mac Book", 250000);
</code></pre>

<hr>

<h2>Example: Buy Clothes</h2>
<pre><code>
function buy_clothes(clothe, size, price) {
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
}

buy_clothes("T-shirt", "M", 500);
buy_clothes("Jeans", "32", 1200);
</code></pre>

<hr>

<h2>Arrow Function Conversion</h2>
<pre><code>
let buy_clothes1 = (clothe, size, price) => {
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
};

buy_clothes1("T-shirt", "L", 1000);
</code></pre>

<hr>

<h2>Function Expression Conversion</h2>
<pre><code>
let buy_clothes2 = function(clothe, size, price) {
    console.log(`Buying ${clothe} of size ${size} at price ${price}`);
};

buy_clothes2("T-shirt", "L", 1500);
</code></pre>

<hr>

<h2>Default Parameters</h2>
<pre><code>
function abcd(b = 10, price = 0) {
    console.log(price, b);
}

abcd(15);
</code></pre>

<div class="note">
    Default parameters are useful for platform fees, taxes, etc.
</div>

<hr>

<h2>Rest Parameters</h2>
<pre><code>
function def1(...numbers) {
    console.log(numbers);
}

def1(1,2,3,4,5,6,7,8,9,10);
</code></pre>

<h3>Example with Rest Parameters</h3>
<pre><code>
function buy_clothes3(...details) {
    console.log(details);
}

buy_clothes3("T-shirt", "M", 500, "Blue", "Cotton");
</code></pre>

<hr>

<h2>Early Return</h2>
<pre><code>
function getValue1(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);
</code></pre>

<hr>

<h2>First Class Functions</h2>
<ul>
    <li>Functions can be stored in variables</li>
    <li>Functions can be passed as arguments</li>
    <li>Functions can be returned from other functions</li>
</ul>

<pre><code>
const cart5 = function(product, price) {
    console.log(`Adding ${product} at ${price}`);
};

cart5("S25 Ultra", 69000);
</code></pre>

<hr>

<h2>Function as Argument</h2>
<pre><code>
function temp_b(fnc) {
    fnc();
}

temp_b(function () {
    console.log("First Class Function");
});
</code></pre>

<hr>

<h2>Function Returning Function</h2>
<pre><code>
function abcd() {
    return function () {
        console.log("Function returned from another function");
    };
}

abcd()();
</code></pre>

<hr>

<h2>Higher Order Function (HOF)</h2>
<p>
A Higher Order Function is a function that accepts another function
as an argument or returns a function.
</p>

<pre><code>
function hof_example(fnc) {
    fnc();
}

hof_example(function () {
    console.log("Higher Order Function");
});
</code></pre>

<hr>
<h2>Pure vs Impure Functions</h2>

<h3>Pure Function</h3>
<ul>
    <li>Always returns the same output for the same input</li>
    <li>Does not modify external state</li>
</ul>

<pre><code>
function abcd_pure() {
    console.log("Hello");
}
</code></pre>

<h3>Impure Function</h3>
<ul>
    <li>Modifies external state OR</li>
    <li>Returns different output for same input</li>
</ul>

<pre><code>
let a = 10;
function abcd_impure() {
    a++;
    console.log(a);
}
</code></pre>

<hr>

<h2>Closure Function</h2>

<p>
A closure is created when an inner function accesses variables of its outer
(parent) function even after the parent function has returned.
</p>

<pre><code>
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}

let fnc3 = outer();
fnc3();
</code></pre>

<div class="note">
     Closure retains access to <strong>count</strong> even after <code>outer()</code> execution.
</div>

<hr>

<h2>Lexical Scope</h2>

<p>
Lexical scope means inner functions can access variables defined in their
outer scope.
</p>

<pre><code>
function outer1(){
    let outer_var = "outer function variable";
    function inner1(){
        let inner_var = "inner function variable";
        function most_inner(){
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
</code></pre>

<hr>

<h2>IIFE (Immediately Invoked Function Expression)</h2>

<p>
An IIFE runs immediately after it is defined.
</p>

<pre><code>
(function (){
    console.log("This is IIFE function");
}());
</code></pre>

<hr>

<h2>Hoisting in Functions</h2>

<h3>Function Declaration (Hoisted)</h3>
<pre><code>
abcde();

function abcde(){
    console.log("This is Hoisting function");
}
</code></pre>

<h3>Function Expression (Not Hoisted)</h3>
<pre><code>
// temp_var();
// var temp_var = function(){
//     console.log("Hello");
// }
</code></pre>

<hr>

<h1>📘 JavaScript Array </h1>
arr[3]; // 4


// Modify
arr[0] = 10;
arr[1] = 20;</code></pre>


<h2>3. push() & pop()</h2>
<pre><code>arr.push(5); // add last
arr.pop(); // remove last</code></pre>
<p><strong>Use case:</strong> Add or remove products from cart</p>


<h2>4. shift() & unshift()</h2>
<pre><code>arr.shift(); // remove first
arr.unshift(1); // add first</code></pre>


<h2>5. splice()</h2>
<pre><code>let e = [50, 60, 30, 40, 10];
e.splice(3, 2);</code></pre>
<p><strong>Use case:</strong> Delete selected messages</p>


<h2>6. slice()</h2>
<pre><code>let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);</code></pre>


<h2>7. splice vs slice</h2>
<ul>
<li><strong>splice:</strong> modifies original array</li>
<li><strong>slice:</strong> creates new array</li>
</ul>


<h2>8. reverse()</h2>
<pre><code>let g = [25, 30, 35, 40];
g.reverse();</code></pre>


<h2>9. sort()</h2>
<pre><code>let arr3 = [10, 2, 5, 20];
arr3.sort((a, b) => a - b);</code></pre>
<p><strong>Use case:</strong> Sort price low to high</p>


<h2>10. forEach()</h2>
<pre><code>let i = [10, 20, 30];
i.forEach(val => console.log(val + 10));</code></pre>


<h2>11. map()</h2>
<pre><code>let data = [10, 20, 50];
let result = data.map(val => val + 5);</code></pre>


<h2>12. filter()</h2>
<pre><code>let prices = [15000, 65000, 99000];
let expensive = prices.filter(p => p > 30000);</code></pre>


<h2>13. reduce()</h2>
<pre><code>let total = [10, 20, 30].reduce((sum, v) => sum + v, 0);</code></pre>


<h2>14. map + filter + reduce</h2>
<pre><code>const prices4 = [200, 800, 1200, 450, 700];
const totalAmount = prices4
.filter(p => p > 500)
.map(p => p - p * 0.1)
.reduce((t, p) => t + p, 0);</code></pre>


<h2>15. find()</h2>
<pre><code>let product = ["Laptop", "Mobile", "Tablet"];
let find_product = product.find(p => p === "Mobile");</code></pre>


<h2>16. some()</h2>
<pre><code>let marks = [10, 20, 90];
let result = marks.some(m => m > 85);</code></pre>


<h2>17. every()</h2>
<pre><code>let scores = [20, 30, 35];
let pass = scores.every(s => s > 18);</code></pre>


<h2>18. Destructuring</h2>
<pre><code>let arr5 = [1, 2, 3, 4];
let [a, , b] = arr5;</code></pre>


<h2>19. Spread Operator</h2>
<pre><code>let arr8 = [1, 2, 3];
let arr9 = [...arr8];


let mix = [...[1,2], ...[3,4]];</code></pre>
<hr />