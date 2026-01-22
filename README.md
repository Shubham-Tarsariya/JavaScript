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