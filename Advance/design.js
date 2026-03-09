// Design Patterns:
// to make a scalable project or write a thounsand lines of code you have to learn about design pattern

// Module Pattern (I[IFE)
// Module Pattern ek design pattern chhe, jema aapde code ek self executing function (IIFE) ni andar lakhiye chhiye, jethi variable and fnc private rahe

// in this fnc we can only retrun that values or fnc that we want to use outside

// main fecture or this pattern is data hidding(encapsulation) and clean structure, secure code, reusable and manageable code

// IIFE
// bank system --> check, Add, withdraw
let bank = (function (){
    let bankbalance = 10000;

    function checkBalance(){
        console.log(`Your Balance ${bankbalance}`)
    }

    function add(val){
        bankbalance += val;
        console.log(`Add Rs. ${val}. Your New Balance ${bankbalance}`);
    }

    function withdraw(val){
        if(bankbalance > val) {
            bankbalance -= val;
            console.log(`Debited ${val}. Your New Balance ${bankbalance}`);
        }else {
            console.log(`You Can't Make a Payment. Your Available Balance is ${bankbalance}`);
        }
    }

    return {
        checkBalance,
        add,
        withdraw,
    }
})();


// in Module pattern --> we create a IIFE --> IIFE return --> we create an object that retrun function

// Factory Function Pattern
// Ek function banavo chho, je objects create kare chhe (factory = objects banava nu machine)

// factory function pattern ek aevi design chhe jema aapade ek simple function banaviye chhiye, je nava objects create kari ne retrun kare chhe

// aa pattern no main idea chhe --> object creation ne ek function na upyog thi control karvu

// every time will call a factory function, tyare ek new object malse jema aapade methods and private data rakhi sakiye chhiye

// aa pattern tyare use karva ma aave chhe jayre, ek j type na multiple objects create karvana hoy, jeva ke users, products, tasks, etc.

function createProduct(name, price, CompanyName) {
  let stock = 10;

  return {
    name,
    price,
    CompanyName,
    buy(qty) {
      if (qty < stock) {
        stock -= qty;
        console.log(`Booked ${name}, left stock are : ${stock}`);
      } else {
        console.error(
          `We Don't have These Many pieces. We only have : ${stock}`,
        );
      }
    },
    refillStock(qty) {
      stock += qty;
      console.log(`Stock Updated. New Stock ${stock}`);
    },
  };
}

let samsung = createProduct("S26 Ultra", 140000, "Samsung");
let kitkat = createProduct("KitKat", 20, "Nestle");

// Observer Pattern (basic pub-sub) (Class)
class Youtube {
  constructor() {
    this.subscribers = [];
  }

  CountUser() {
    let total = this.subscribers.length;
    console.log("You Have Total ", total, "Subscribers");
  }

  Subscribe(user) {
    this.subscribers.push(user);
    console.log(`You New Subscriber ${user.name}`);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(data);
  }
}

let laminds = new Youtube();
let sub = new User("test_user");
 