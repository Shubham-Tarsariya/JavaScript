// -------------------------------
// Variables & Data Types (1–15)
// -------------------------------
let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

console.log('\n=== Q1: == vs ===');
console.log('a == "a" ->', a == "a"); // true (value)
console.log('a === "a" ->', a === "a"); // true (value + type)

console.log('\n=== Q2: b == c vs b === c');
console.log('b == c ->', b == c);   // true: '10' coerced to 10
console.log('b === c ->', b === c); // false: different types

console.log('\n=== Q3: convert b so b === c is true');
b = Number(b); // now b is number 10
console.log('b (after Number) === c ->', b === c); // true

console.log('\n=== Q4: check undefined without typeof');
console.log('d === undefined ->', d === undefined);

console.log('\n=== Q5: safely check d and e');
// d == null is true for undefined/null; e == null true for null
console.log('d == null ->', d == null, '// checks undefined or null');
console.log('e == null ->', e == null);

console.log('\n=== Q6: null == undefined vs null !== undefined');
console.log('null == undefined ->', null == undefined);   // true
console.log('null === undefined ->', null === undefined); // false

console.log('\n=== Q7: type coercion c + b and fix it');
// Reset b to string for demo
b = '10';
console.log('c + b ->', c + b, '// "1010" string concatenation due to b being string');
console.log('fixed: c + Number(b) ->', c + Number(b));

console.log('\n=== Q8: c / "a" is NaN?');
const divResult = c / 'a';
console.log('c / "a" ->', divResult);
console.log('Number.isNaN(divResult) ->', Number.isNaN(divResult));

console.log('\n=== Q9: convert b to number (two ways)');
b = '10';
console.log('Number(b) ->', Number(b));
console.log('+b ->', +b);

console.log('\n=== Q10: convert c to string (two ways)');
console.log('String(c) ->', String(c));
console.log('c.toString() ->', c.toString());

console.log('\n=== Q11: turn any value into boolean');
console.log('Boolean(0) ->', Boolean(0));
console.log('!!"hello" ->', !!"hello");

console.log('\n=== Q12: const assignment error');
const CONST_NUM = 5;
console.log('CONST_NUM initial ->', CONST_NUM);
try {
	// Uncommenting next line would throw TypeError in runtime — demonstrating here with try/catch
	// CONST_NUM = 10; // TypeError: Assignment to constant variable.
	throw new TypeError('Assignment to constant variable.');
} catch (err) {
	console.log('Reassignment error (expected):', err.message);
}

console.log('\n=== Q13: primitive copy independence');
let p1 = 100;
let p2 = p1;
p2 = 200;
console.log('p1 ->', p1, 'p2 ->', p2, '// p1 unchanged — primitives copy by value');

console.log('\n=== Q14: comparison that looks true but false');
console.log('0 == false ->', 0 == false); // true
console.log('0 === false ->', 0 === false); // false — looks like true but strict fails

console.log('\n=== Q15: fix buggy comparison by using strict equality');
console.log('\"10\" == 10 ->', '10' == 10);
console.log('\"10\" === 10 ->', '10' === 10);

// -------------------------------
// Operators (16–30)
// -------------------------------
console.log('\n=== Q16: even without % (bitwise)');
const n16 = 8;
console.log(n16, 'is even ->', (n16 & 1) === 0);

console.log('\n=== Q17: max without if or Math.max');
const x17 = 10, y17 = 20;
console.log('max ->', x17 > y17 ? x17 : y17);

console.log('\n=== Q18: simple calculator (a op b)');
function calc(a18, b18, op) {
	switch (op) {
		case '+': return a18 + b18;
		case '-': return a18 - b18;
		case '*': return a18 * b18;
		case '/': return a18 / b18;
		default: return NaN;
	}
}
console.log('3 * 4 =', calc(3, 4, '*'));

console.log('\n=== Q19: defaults with || and ??');
const userInput19 = 0;
console.log('using || ->', userInput19 || 10); // 10 because 0 is falsy
console.log('using ?? ->', userInput19 ?? 10); // 0 because ?? only checks null/undefined

console.log('\n=== Q20 & Q21: ternary and chained ternary');
const age = 20;
console.log('canVote ->', age >= 18 ? 'yes' : 'no');
const score21 = 85;
console.log('grade ->', score21 >= 90 ? 'A' : score21 >= 75 ? 'B' : 'C');

console.log('\n=== Q22: use && to execute');
const cond22 = true;
cond22 && console.log('executed because cond22 is true');

console.log('\n=== Q23: short-circuit behavior');
console.log('true || expr (skips expr) ->', true || (console.log('skipped'), 5));
console.log('false && expr (skips expr) ->', false && (console.log('skipped'), 5));

console.log('\n=== Q24: compare different types');
console.log('"5" == 5 ->', '5' == 5);
console.log('"5" === 5 ->', '5' === 5);

console.log('\n=== Q25 & Q26: nullish coalescing vs ||');
const val25 = null;
console.log('val25 ?? 100 ->', val25 ?? 100);
console.log('val25 || 100 ->', val25 || 100);
const val26 = 0;
console.log('0 || 100 ->', val26 || 100); // 100
console.log('0 ?? 100 ->', val26 ?? 100); // 0

console.log('\n=== Q27: spread to merge arrays');
const arr27a = [1,2], arr27b = [3,4];
console.log('merged ->', [...arr27a, ...arr27b]);

console.log('\n=== Q28: rest operator example');
function sumAll(...nums) { return nums.reduce((s,n)=>s+n,0); }
console.log('sumAll(1,2,3) ->', sumAll(1,2,3));

console.log('\n=== Q29: copy array safely');
const orig29 = [1,2,3];
const copy29 = [...orig29];
copy29.push(4);
console.log('orig ->', orig29, 'copy ->', copy29);

console.log('\n=== Q30: operator precedence example');
console.log('2 + 3 * 4 ->', 2 + 3 * 4, '// multiplication before addition');
console.log('(2 + 3) * 4 ->', (2+3) * 4);

// -------------------------------
// Control Flow (31–45)
// -------------------------------
console.log('\n=== Q31: grading with if-else');
function grade(score){
	if(score>=90) return 'A';
	if(score>=75) return 'B';
	if(score>=60) return 'C';
	return 'F';
}
console.log('grade(82) ->', grade(82));

console.log('\n=== Q32: grading with switch (by range using true)');
function gradeSwitch(score){
	switch(true){
		case (score>=90): return 'A';
		case (score>=75): return 'B';
		case (score>=60): return 'C';
		default: return 'F';
	}
}
console.log('gradeSwitch(82) ->', gradeSwitch(82));

console.log('\n=== Q33: switch fall-through');
switch(2){
	case 1: console.log('one');
	case 2: console.log('two');
	case 3: console.log('three');
	break;
}

console.log('\n=== Q34 & Q35: login nested vs refactor');
function login(user){
	// nested
	if(user){
		if(user.active){
			return 'ok';
		}
	}
	return 'fail';
}
function loginClean(user){
	if(!user || !user.active) return 'fail';
	return 'ok';
}
console.log('login({active:true}) ->', login({active:true}));
console.log('loginClean({active:true}) ->', loginClean({active:true}));

console.log('\n=== Q36: execute only when two conditions true');
const c1=true, c2=true;
if(c1 && c2) console.log('both true');

console.log('\n=== Q37: multiple conditions');
const age37 = 25; console.log(age37>18 && age37<60 ? 'working age' : 'other');

console.log('\n=== Q38: menu switch');
function menu(choice){
	switch(choice){
		case 'a': return 'option A';
		case 'b': return 'option B';
		default: return 'unknown';
	}
}
console.log('menu("b") ->', menu('b'));

console.log('\n=== Q39: missing break continues execution');
switch('x'){
	case 'x': console.log('x matched');
	case 'y': console.log('y matched too (fall-through)'); break;
}

console.log('\n=== Q40: switch to if-else');
function menuIf(choice){
	if(choice==='a') return 'A';
	if(choice==='b') return 'B';
	return 'unknown';
}
console.log('menuIf("a") ->', menuIf('a'));

console.log('\n=== Q41: validate range');
function inRange(n, min, max){ return n>=min && n<=max; }
console.log('inRange(5,1,10) ->', inRange(5,1,10));

console.log('\n=== Q42: early return');
function findPositive(arr){ if(!arr || arr.length===0) return null; for(const v of arr) if(v>0) return v; return null; }
console.log('findPositive([-1,2]) ->', findPositive([-1,2]));

console.log('\n=== Q43: traffic light');
function traffic(color){ switch(color){ case 'red': return 'stop'; case 'yellow': return 'slow'; case 'green': return 'go'; default: return 'invalid'; }}
console.log('traffic("green") ->', traffic('green'));

console.log('\n=== Q44: real-life decision to code (example)');
function shouldWearCoat(temp){ return temp < 15 ? true : false; }
console.log('shouldWearCoat(10) ->', shouldWearCoat(10));

console.log('\n=== Q45: handle edges first');
function safeDivide(a,b){ if(b===0) return null; return a/b; }
console.log('safeDivide(4,0) ->', safeDivide(4,0));

// -------------------------------
// Loops (46–60)
// -------------------------------
console.log('\n=== Q46: 1 to 100');
for(let i=1;i<=100;i++); // suppressed printing to avoid huge output
console.log('printed 1..100 loop executed (suppressed output)');

console.log('\n=== Q47: print even numbers using loop example (2..10)');
for(let i=2;i<=10;i+=2) console.log(i);

console.log('\n=== Q48: stop loop when condition met');
for(let i=1;i<=10;i++){ if(i>5){ console.log('stopped at', i); break; } }

console.log('\n=== Q49: skip divisible by 3');
const arr49=[]; for(let i=1;i<=10;i++){ if(i%3===0) continue; arr49.push(i);} console.log(arr49);

console.log('\n=== Q50: sum using loop');
let sum50=0; for(let i=1;i<=10;i++) sum50+=i; console.log(sum50);

console.log('\n=== Q51: reverse a number (1234 -> 4321)');
function reverseNumber(n){ let rev=0; while(n){ rev = rev*10 + n%10; n = Math.floor(n/10); } return rev; }
console.log('reverseNumber(1234)->', reverseNumber(1234));

console.log('\n=== Q52: count digits');
function countDigits(n){ return String(Math.abs(n)).length; }
console.log('countDigits(12345)->', countDigits(12345));

console.log('\n=== Q53: factorial');
function factorial(n){ let f=1; for(let i=2;i<=n;i++) f*=i; return f; }
console.log('factorial(5)->', factorial(5));

console.log('\n=== Q54: Fibonacci up to 10 terms');
function fib(n){ const out=[0,1]; for(let i=2;i<n;i++) out.push(out[i-1]+out[i-2]); return out.slice(0,n);} console.log(fib(10));

console.log('\n=== Q55: break out nested loops using label');
outer: for(let i=0;i<3;i++){ for(let j=0;j<3;j++){ if(i===1 && j===1){ console.log('breaking at',i,j); break outer; } }}

console.log('\n=== Q56: continue example');
for(let i=1;i<=5;i++){ if(i===3) continue; console.log('i=',i); }

console.log('\n=== Q57: multiplication table 3');
for(let i=1;i<=10;i++) console.log(`3 x ${i} =`, 3*i);

console.log('\n=== Q58: fix infinite loop example (commented)');
// while(true) {} // would be infinite — fix by using a condition variable

console.log('\n=== Q59: for vs while');
let s1=''; for(let i=0;i<3;i++) s1 += i; console.log('for produced', s1);
let s2=''; let w=0; while(w<3){ s2+=w; w++; } console.log('while produced', s2);

console.log('\n=== Q60: replace loop with array methods');
const nums60=[1,2,3,4,5]; console.log('sum with reduce->', nums60.reduce((a,b)=>a+b,0));

// -------------------------------
// Functions (61–80)
// -------------------------------
console.log('\n=== Q61: sum function');
function sum61(a61,b61){ return a61+b61; }
console.log('sum61(2,3)->', sum61(2,3));

console.log('\n=== Q62: arrow function');
const sum62 = (a,b)=>a+b; console.log(sum62(3,4));

console.log('\n=== Q63: default params');
function greet(name='Guest'){ return `Hi ${name}`; } console.log(greet());

console.log('\n=== Q64: return function');
function makeAdder(x){ return y=>x+y; } const add5=makeAdder(5); console.log(add5(3));

console.log('\n=== Q65 & Q66: pass function and callback');
function higher(fn){ return fn(); } console.log(higher(()=> 'called'));

console.log('\n=== Q67: pure function example');
function pureAdd(a,b){ return a+b; } console.log(pureAdd(1,2));

console.log('\n=== Q68: side effect example');
let global = 0; function side(){ global++; } side(); console.log('global->',global);

console.log('\n=== Q69: recursive factorial');
function factRec(n){ if(n<=1) return 1; return n * factRec(n-1); } console.log(factRec(5));

console.log('\n=== Q70: iterative factorial (converted)');
console.log(factorial(5));

console.log('\n=== Q71: function accepts unlimited args');
function sumVar(){ return [...arguments].reduce((s,v)=>s+v,0); } console.log('sumVar(1,2,3)->', sumVar(1,2,3));

console.log('\n=== Q72: higher-order function');
function mapWith(fn, arr){ return arr.map(fn); } console.log(mapWith(x=>x*2, [1,2]));

console.log('\n=== Q73: closure preserve state');
function counter(){ let n=0; return ()=>++n; } const c73=counter(); console.log(c73(),c73());

console.log('\n=== Q74: function counter (simple)');
function makeCounter(){ let i=0; return ()=>++i; } const ct=makeCounter(); console.log(ct(),ct());

console.log('\n=== Q75: currying');
const curryAdd = a=>b=>a+b; console.log(curryAdd(2)(3));

console.log('\n=== Q76: memoized fibonacci (simple)');
function memoFib(){ const cache={0:0,1:1}; return function fib(n){ if(cache[n]!==undefined) return cache[n]; cache[n]=fib(n-1)+fib(n-2); return cache[n]; }; }
const mf = memoFib(); console.log(mf(10));

console.log('\n=== Q77: handle invalid input');
function safeDivideFunc(a,b){ if(typeof a!=='number' || typeof b!=='number') return null; if(b===0) return null; return a/b; }
console.log('safeDivideFunc(6,3)->', safeDivideFunc(6,3));

console.log('\n=== Q78: arrow vs normal (this)');
const obj = {v:10, f: function(){ return this.v; }, g: ()=> typeof this}; console.log('normal->', obj.f(), 'arrow->', obj.g());

console.log('\n=== Q79: run once');
function once(fn){ let done=false; return (...args)=>{ if(done) return; done=true; return fn(...args);} }
const runOnce = once(()=>console.log('running')); runOnce(); runOnce();

console.log('\n=== Q80: refactor repeated logic');
function clamp(v,min,max){ return Math.min(max, Math.max(min, v)); } console.log(clamp(15,0,10));

// -------------------------------
// Arrays (81–101)
// -------------------------------
console.log('\n=== Q81: sum array');
const q81 = [1,2,3,4]; console.log(q81.reduce((s,n)=>s+n,0));

console.log('\n=== Q82: max element');
console.log(Math.max(...q81));

console.log('\n=== Q83: remove duplicates');
const dup=[1,2,1,3]; console.log([...new Set(dup)]);

console.log('\n=== Q84: second largest');
const arr84=[10,5,8,20]; const sorted84=[...arr84].sort((a,b)=>b-a); console.log(sorted84[1]);

console.log('\n=== Q85: filter positive');
console.log([-1,2,-3,4].filter(n=>n>0));

console.log('\n=== Q86: map to squares');
console.log([1,2,3].map(n=>n*n));

console.log('\n=== Q87: use reduce to count');
console.log([1,2,3,4].reduce(c=>c+1,0));

console.log('\n=== Q88: chain filter->map->reduce');
console.log([1,2,3,4].filter(n=>n%2===0).map(n=>n*2).reduce((s,n)=>s+n,0));

console.log('\n=== Q89: find first matching');
console.log([1,4,6].find(n=>n>3));

console.log('\n=== Q90: any satisfies');
console.log([1,2,3].some(n=>n>2));

console.log('\n=== Q91: all satisfy');
console.log([2,4,6].every(n=>n%2===0));

console.log('\n=== Q92: destructuring first & rest');
const [first92,...rest92] = [10,20,30]; console.log(first92, rest92);

console.log('\n=== Q93: merge arrays');
console.log([... [1,2], ...[3,4]]);

console.log('\n=== Q94: deep clone (simple arrays of primitives)');
const orig94=[1,2,3]; const clone94 = JSON.parse(JSON.stringify(orig94)); console.log(clone94);

console.log('\n=== Q95: sort without .sort() (simple: insertion)');
function insertionSort(arr){ const a=[...arr]; for(let i=1;i<a.length;i++){ let key=a[i], j=i-1; while(j>=0 && a[j]>key){ a[j+1]=a[j]; j--; } a[j+1]=key;} return a; }
console.log(insertionSort([3,1,2]));

console.log('\n=== Q96: rotate array');
function rotate(arr,k){ const n=arr.length; k%=n; return arr.slice(k).concat(arr.slice(0,k)); }
console.log(rotate([1,2,3,4],2));

console.log('\n=== Q97: flatten nested array (one level)');
console.log([1,[2,3],4].flat());

console.log('\n=== Q98: custom map');
function customMap(arr,fn){ const out=[]; for(let i=0;i<arr.length;i++) out.push(fn(arr[i],i,arr)); return out; }
console.log(customMap([1,2], x=>x*3));

console.log('\n=== Q99: custom filter');
function customFilter(arr,fn){ const out=[]; for(let i=0;i<arr.length;i++) if(fn(arr[i],i,arr)) out.push(arr[i]); return out; }
console.log(customFilter([1,2,3], x=>x%2===1));

console.log('\n=== Q100: custom reduce');
function customReduce(arr, fn, init){ let acc = init; for(let i=0;i<arr.length;i++){ acc = fn(acc, arr[i], i, arr); } return acc; }
console.log(customReduce([1,2,3], (s,n)=>s+n, 0));

console.log('\n=== Q101: FINAL BOSS combine methods');
const boss = [1,2,3,4,5];
const bossResult = boss
	.filter(n=>n%2===0)
	.map(n=>n*n)
	.reduce((s,n)=>s+n,0);
console.log('bossResult ->', bossResult);
