// Object Oriented Javascript
// 00PS
// dar vakhat blueprint banavo ke object kevo dekhase ane shu properties ane methods hase, ane pacchi tena upyog thi nava nava objects banvani sakiye chhiye tene j kevaay chhe Object Oriented Programming

// blueprint(object kevo dekhase, object ma su method) --> based on blueprint create objects

// blueprint -- contructor
// function based contructor --> Contructor Function --> function Name always start with Capital letter

function CreatePencil(name, price, color){
    console.log(this);
    this.name = name;
    this.price = price;
    this.color = color;

    this.write = function (msg){
        let h1 = document.createElement("h1");
        h1.textContent = msg;
        h1.style.color = this.color;
        document.querySelector("body").appendChild(h1);
    };
}

let pencil1 = new CreatePencil("Natraj", 5, "red");
let pencil2 = new CreatePencil("Apsara", 10, "blue");

// jo construction function koi field tena prototype ma add (attech) kari de to te field badha object ma available thase

CreatePencil.prototype. shape = "round";

// what is prototype: prototype is a property of function which is used to add new field to all the object created by that function

// Class in JavaSctipt
// class is a syntatical sugar over construction function, class ma apde constructor function no upyog kariye chhiye

// why use class: class is more readable and easier to understand than construction function
class CreatePen{
    constructor(name, price, qty, color){
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.color = color;

        // write
        this.write = function (msg) {
        let h1 = document.createElement("h1");
        h1.textContent = msg;
        h1.style.color = this.color;
        document.querySelector("body").appendChild(h1);
        }
    }
}
let pen1 = new CreatePen("Ajay", 5, 10, "green");
let pen2 = new CreatePen("Vijay", 10, 20, "blue");

// extends --> super
// create a new class that hold old class value and also have some new values
// copy old class and add new 
class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = "user";
    }
}

let user = new User("test", "test@test.com", "abc@123");
console.log("user",user);

class Admin extends User{
    constructor(name, email, password, rights){
        super(name, email, password); // extends class constructor --> super
        this.role = "admin";
        this.rights = rights;
    }
}

let admin = new Admin(
    "admin",
    "admin@admin.com",
    "abc@123",
    "delete user, edit user, create user",
);
console.log(admin);

// prototypal inheritance vs classical inheritance
// classical Inheritance -- create a classes and extands their classes

// inheritance meaning -- > class to class inheritance (copy one class into anthor class)

// prototypal inheritance -- > object to object
// ek object chhe tene tame all props/methods ne inherit kari chho ke nava object ma
let coffee = {
    color:"black",
    create: function(){
        console.log("Creating A Coffee");
    },
};
console.log(coffee);
let americano = Object.create(coffee);
americano.taste = "bitter";
console.log(americano);

// create form that can save data into local storage with help of using 00PS (only)