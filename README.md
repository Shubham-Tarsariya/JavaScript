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