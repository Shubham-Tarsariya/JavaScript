// this Keyword
// this keyword special keyword in javascript
// beacause of this keyword we can access the properties and methods of an object
// this keyborad is used to refer to the current object
// this keyword is userful when we have to access the properties and methods of an object inside a method of that object

// this keyborad context is determined by how a function is called(that is the reason why this keyword is called dynamic scope) (this ni value this nu use karva context ma chhe te par depend kare chhe)

// global context
console.log(this); // window

// function es5 context
function abc(){
    console.log(this);
}
abc(); // window

// function es6 context
let bcd = () => {
    console.log(this);
}
bcd();

// method context
// method --> function in object
// 1. method --> fnc es5
let a = {
    name:"test",
    age:25,
    write: function (){
        // method --> ek function je koi object ni under hoy tene method kevaay. // this --> give obeject

        // if you use arrow function then this key give you windows object because arrow function does not have its own this keyword it takes this value from its parent scope

        // if you create one more function inside method then this loose their value --> solution --> you have to create a arrow function
        console.log(this);
    },
};
a.write(); // object

// 2. method --> fnc es6
let b = {
    name:"test",
    age:25,
    write: () => {
        console.log(this);
    },
};
b.write(); // window

// 3. method --> fnc es5 ==> fnc es5
let c ={
    name:"test",
    age: 25,
    write: function (){
        function abc(){
            console.log(this);
        }
        abc();
    },
};
c.write(); // window

// 4. method --> fnc es5 ==> fnc es6 (arrow function)
let d ={
    name:"test",
    age: 25,
    write: function (){
        let bcd = () => {
            console.log("Arrow Function", this);
        }
        bcd();
    },
};
d.write(); // window

// event handler context
document.querySelector("h1").addEventListener("click", function(){
    console.log(this); // h1
}); // this value = html element

// class context 
class Person {
    constructor(){
        this.username = " test";
        this.email = "test@gmail.com";
        console.log(this); 
    }
}

let p1 = new Person();
console.log("Class", p1); 

// context --> this keyword value
// global context --> window
// function context --> window
// method context with es5 fnc --> object
// method context with es6 fnc --> window
// arrow function inside es5 fnc --> object
// es5 fnc inside es5 fnc --> window
// event handler context --> html element
// class --> blank object

// Manual Binding
// call, apply, bind
// function ne call karti vakhate this keyword ni value set karva mate call, apply, bind method no upyog kariye chhiye

let pr = {
    name:"test",
    email:"test@gmail.com",
};

function profile(pr){
    console.log("value of this",this);
}
// profile.call(pr);
// profile.apply(pr);
let fnc = profile.bind(pr); // black object
fnc();