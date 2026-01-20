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

<p><strong>Author:</strong> JavaScript Learning Notes</p>
