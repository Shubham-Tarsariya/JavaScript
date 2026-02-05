// Array -- Hold multiple values at same time
// [1, 2, 3, 4, 5]
// ["Hello", "A", "B", "C"]
// [2, "Bye", "hello", 50]

// create 
// define a variable = [multiple values]
let arr = [1, 2, 3, 4];

// access
// position = [0 1 2 3]
// access
// array_name[position]
// arr[3], arr[2], arr[10]

// modify
// array_name[position] = new value
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// output: arr = [10,20,30,40]

// Array Methods: (variable_name.method_name)
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
arr.push(5);
// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// use case -- enter new products into existing products list
let cars = ["BMW", "Audi", "Mercedes"];
cars.push("Range Rover");// ["BMW", "Audi", "Mercedes", "Range Rover"]
cars.pop();

// pop --> remove last value into array
arr.pop()
// use case -- remove last product you add into your list

// shift --> remove first value into Array
arr.shift()
// use case -- remove old product automatic after sometimes

// unshift --> add value into array -- first
arr.unshift()
// use case -- add a value into top of that data you receive

// splice --> remove value into array -- specific position and specific number of values
// into () - first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
// use case -- select msg and remove multiple msg at on click

// slice --> copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1,3); 
//use case -- copy specific data and save it into new specific
let laptops = ["Dell", "HP", "Apple", "Asus", "Acer"];
let new_laptops = laptops.slice(1,4);// new_laptops = ["HP", "Apple", "Asus"]

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse --> reverse value of array
let g = [25, 30, 35, 40, 45];
g.reverse();
// use case -- show latest update first into your frontend

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })

// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return b - a; // decending order
// })

//------------------------------------------------------------------------------------------------------
// Q1.  push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
// tasks.push('Buy milk');
// output: tasks = ['Wake up', 'Brush teeth', 'Buy milk']

// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();
// output: notifications = ['Email', 'Message']

// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift();
// output: customers = ['Customer2', 'Customer3']

// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A');
// output: playlist = ['Song A', 'Song B', 'Song C']

// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara');
// output: students = ['Mike', 'John', 'Sara', 'Emma', 'Sophia']

// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1, 2);
// output: menu = ['Burger', 'Salad']

// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend = days.slice(5, 7);
// output: weekend = ['Saturday', 'Sunday']


// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();
// output: levels = ['Hard', 'Medium', 'Easy']

// Q9. sort()
// Sort the scores in ascending order.
// let scores = [45, 12, 78, 34, 89];
// scores.sort(function(a, b){
//     return a - b; // ascending order
// });
// output: scores = [12, 34, 45, 78, 89]


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
// let prices = [199, 49, 999, 299, 149];
// prices.sort(function(a, b){
//     return a - b; // ascending order
// });
// output: prices = [49, 149, 199, 299, 999]

// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3);
// output: firstThree = ['Laptop', 'Phone', 'Tablet']

// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// colors.splice(2, 1, 'Purple', 'Orange');
// output: colors = ['Red', 'Green', 'Purple', 'Orange', 'Yellow']

// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');
// output: steps = ['Step 3', 'Step 2', 'Step 1', 'Final Step']

// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
// let names = ['alice', 'Bob', 'charlie', 'David'];
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// output: names = ['alice', 'Bob', 'charlie', 'David']

// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception');
// movies.shift();
// movies.sort();
// output: movies = ['Gladiator', 'Inception', 'Titanic']

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
// output: [2, 3]

// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// output: result = [20, 30] , original nums2 = [10, 20, 30, 40]

// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// output: reversedLetters = ['c', 'b', 'a'] , original letters = ['c', 'b', 'a']

// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');
// output: arr1 = ['x', 'new', 'y', 'z']

// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// output: sliced = [300, 400]


// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged
// output:
// a) splice()
// b) slice()

// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
// output: arr2 = [2, 3, 1]

//------------------------------------------------------------------------

// use case -- sort product price low to highest
let arr3 = [10, 2, 5, 20, 30];
// let sort_var = arr3.sort(function(a, b){
//     return a - b; // ascending order
// })
let sort_var = arr3.sort((a,b)=> a-b) // -- use when array give number or numeric values

let arr4 = ['b', 'f', 'z', 'q', 'm', 'k'];

// For Each Loop
// for Each -- Array ni darek value mate loop chalse
let i = [10, 35, 40, 68];
i.forEach(val => {
    let new_val = val + 10;
    console.log(new_val)
});

// Example: for Each Loop with colthes price
let clothes_price = [500, 700, 1200, 3000];
clothes_price.forEach(price => {
    let discount_price = price - (price * 10 / 100);
    console.log(discount_price);
});

// .map() Method:
// map tyare j use karvu ke jare ek new array create karvo chhe
// first map create a black array -- only for understanding
let data = [10, 20, 50, 40, 15];
// same like a for each loop but map return a new array
let temp_data = data.map( val => {
    if(val > 20){
        return val;
    }
});

//---------- Example----------------------------------
//1. Double daily steps count
// Real life: Fitness app doubling step goal
const steps = [1000, 2000, 3000];
function doubleSteps(step) {
  return step * 2;
}
const newSteps = steps.map(doubleSteps);
// output: newSteps = [2000, 4000, 6000]

// 2. Convert minutes to seconds
// Real life: Video duration calculation
const minutes = [1, 5, 10];
const seconds = minutes.map(function(min) {
  return min * 60;
});
// output:  seconds = [60, 300, 600]

// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app
const prices = [200, 350, 500];
const finalPrices = prices.map(price => price + 50);
// output: finalPrices = [250, 400, 550]

// 4. Convert exam marks to grades
// Real life: Result system
const marks = [35, 72, 88, 40];
function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
// output: grades = ['Fail', 'Pass', 'Pass', 'Pass']

// 5. Capitalize names
// Real life: Display usernames properly
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);
// output: formattedNames = ['Rahul', 'Neha', 'Amit']

// 6. Apply 10% discount
// Real life: Shopping sale
const prices1 = [500, 1000, 1500];
function applyDiscount(price) {
  return price - price * 0.10;
}
const discounted = prices1.map(applyDiscount);
// output: discounted = [450, 900, 1350]

// 7. Add bonus points to scores based on condition
// Real life: Game scoring system
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
// output: finalScores = [45, 70, 105]

// 8. Convert temperatures with formula
// Real life: Weather app
const celsius = [0, 20, 30];
function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
const fahrenheit = celsius.map(toFahrenheit);
// output: fahrenheit = [32, 68, 86]

// 9. Generate table of numbers
// Real life: Math learning app
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
// output: tableOfTwo = [2, 4, 6, 8]

// 10. Combine map with string formatting
// Real life: SMS notification system
const balances = [500, 1200, 300];
const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
// output: messages = ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']

//----------------------------------------------------------------------------------------------
// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true -- > add into new array
// if else(false) -- > not add into new array
let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];
let expensive_laptops = laptops_price. filter((price)=> {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma add thase and biji value he array ma add nahi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
let product_type = ["Mobile", "Tablet", "Laptop", "Mouse", "Keyborad"];
let filter_product_type = product_type.filter((type) => {
    if (type === "Tablet" || type === "Mobile") return true;
});

//---------Example---------------------------------------------------------
// ### 1. Get even numbers
// **Real life:** Find even roll numbers
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
// output: evenNumbers = [2, 4, 6]

// ### 2. Filter adults
// **Real life:** Allow only 3+ users
const ages = [2, 1, 10, 16, 5];
function isAdult(age) {
  return age >= 18;
}
const adults = ages.filter(isAdult);
// output: adults = []

// ### 3. Remove empty items
// **Real life:** Clean user input
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
// output: validInputs = ['Hello', 'World', 'JS']

// ### 4. Filter passing marks
// **Real life:** Exam result system
const marks1 = [35, 72, 88, 40, 25];
const passedStudents = marks1.filter(mark => mark >= 40);
// output: passedStudents = [72, 88, 40]

// ### 5. Get affordable prices
// **Real life:** Shopping app price filter
const prices2 = [199, 499, 999, 1499, 299];
const affordable = prices2.filter(price => price <= 500);
// output: affordable = [199, 499, 299]

// ### 6. Filter long words
// **Real life:** Search keyword validation
const words = ['hi', 'hello', 'javascript', 'ok'];
function isLongWord(word) {
  return word.length > 3;
}
const longWords = words.filter(isLongWord);
// output: longWords = ['hello', 'javascript']

// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
// output: credits = [200, 500, 300]

// ### 8. Filter numbers within a range
// **Real life:** Score selection
const scores1 = [45, 60, 85, 30, 90];
const selectedScores = scores1.filter(score => score >= 50 && score <= 90);
// output: selectedScores = [60, 85, 90]

//-------------------------------------------------------------------------------
// reduce 
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
let total_price = [15, 68, 45, 58, 52, 48];
let final_price = total_price. reduce((accumulator, val) => {
    return accumulator + val;
}, 0); // intial value of accumulator
// 0+ 15 => 15
// 15 + 68 => 83
// 83 + 45 => 128
// 128 + 58 => 186
// 186 + 52 => 238
// 238 + 48 => 286
// accumulator -- > je value function ma retun thase te accumulator ma store thase -- > accumulator name change kari sako cho
// val -> array ni darek value

// use case -- data ma thi ek single value calulate karvi hoy
// ex. producat ma thi total price calculate karvi hoy

//--------Example--------------------------

//### 1. Total money in wallet
//**Real life:** Add all cash amounts
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
//output: totalMoney = 350

//### 2. Total steps walked in a week
//**Real life:** Fitness tracker
const steps1 = [3000, 5000, 4000, 6000];
function addSteps(total, steps) {
  return total + steps;
}
const weeklySteps = steps1.reduce(addSteps, 0);
//output: weeklySteps = 18000

//### 3. Find total cart price
//**Real life:** Shopping bill
const prices3 = [499, 299, 199];
const totalPrice = prices3.reduce((total, price) => total + price, 0);
//output: totalPrice = 997

//### 4. Find maximum score
//**Real life:** Highest exam mark
const marks2 = [45, 88, 67, 92];
const highest = marks2.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks2[0]);
// output: highest = 92

//### 5. Count total characters
//**Real life:** Text length calculation
const words1 = ['Hi', 'Hello', 'JS'];
const totalChars = words1.reduce((count, word) => count + word.length, 0);
// output: totalChars = 9

// ### 6. Combine words into a sentence
// **Real life:** Message builder
const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words2.reduce((text, word) => text + ' ' + word);
// output: sentence = 'Learning JavaScript is fun'

//### 7. Count passed students
//**Real life:** Result summary
const marks3 = [35, 72, 88, 40, 25];
const passCount = marks3.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
// output: passCount = 3

//### 8. Calculate final balance
//**Real life:** Bank account calculation
const transactions1 = [1000, -200, -300, 500];
const finalBalance = transactions1.reduce((balance, amount) => balance + amount, 0);
// output: finalBalance = 1000

//### 10. Build comma-separated string
//**Real life:** Display values in UI
const items = ['Pen', 'Book', 'Pencil'];
const result1 = items.reduce((text, item) => text + ', ' + item);
// output: result1 = 'Pen, Book, Pencil'

//------------------.Map, .Filter() and .reduce() Method Examples:-----------------------------------------------

// Q1. Shopping App – Discounted Total
// You are given a list of item prices.
// **Tasks:**
// 1. Keep only items costing more than 500
// 2. Apply a 10% discount to those items
// 3. Find the total amount to pay
//Ans.
const prices4 = [200, 800, 1200, 450, 700];
const totalAmount = prices4
.filter(price => price > 500)
.map(price => price - price * 0.1)    
.reduce((total, price) => total + price, 0);
// output: 1710

// Q2. Fitness App – Total Active Minutes
// You are given daily activity minutes.
// **Tasks:**
// 1. Keep only days with more than 30 minutes activity
// 2. Convert minutes to calories (1 min = 5 calories)
// 3. Calculate total calories burned
//Ans.
const minutes5 = [20, 45, 60, 15, 90];
const totalCalories = minutes5
.filter(min => min > 30)
.map(min => min * 5)
.reduce((total, calories) => total + calories, 0);
// output: 750

// Q3. Exam System – Average of Passed Marks
// You are given marks of students.
// **Tasks:**
// 1. Keep only passing marks (>= 40)
// 2. Calculate the average of passed marks
//Ans.
const marks5 = [35, 72, 88, 40, 25, 90];
const passedMarks = marks5.filter(mark => mark >= 40);
const average = passedMarks.reduce((sum, mark) => sum + mark, 0) / passedMarks.length;
// output: 67.5

// Q4. Salary System – Monthly Payout
// You are given daily wages.
// **Tasks:**
// 1. Keep wages greater than 500
// 2. Add a bonus of 100 to each
// 3. Calculate total payout
//Ans.
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
.filter(wage => wage > 500)
.map(wage => wage + 100)
.reduce((total, wage) => total + wage, 0);
// output: 2500

// Q5. Online Course – Completion Points
// You are given lesson completion percentages.
// **Tasks:**
// 1. Keep only completed lessons (>= 50%)
// 2. Convert percentage into points (percentage × 2)
// 3. Calculate total points
// Ans.
const progress = [20, 50, 75, 40, 100];
const totalPoints = progress
.filter(percent => percent >= 50)
.map(percent => percent * 2)
.reduce((total, points) => total + points, 0);
// output: 350

// Q6. Bank Transactions – Final Balance
// You are given a list of transactions.
// **Tasks:**
// 1. Keep only credit transactions (positive values)
// 2. Add 2% interest to each credit
// 3. Calculate final credited amount
// Ans.
const transactions2 = [1000, -500, 2000, -300, 1500];
const finalCredit = transactions2
.filter(amount => amount > 0)
.map(amount => amount + amount * 0.02)
.reduce((total, amount) => total + amount, 0);
// output: 4590

// Q7. Game App – Final Score
// You are given scores from multiple rounds.
// **Tasks:**
// 1. Keep scores greater than 50
// 2. Add bonus points (+10)
// 3. Calculate final score
// Ans.
const scores2 = [30, 60, 90, 45, 80];
const finalScore = scores2
.filter(score => score > 50)
.map(score => score + 10)
.reduce((total, score) => total + score, 0);
// output: 250

// Q8. E-commerce – Total Taxed Amount
// You are given item prices.
// **Tasks:**
// 1. Keep items priced above 1000
// 2. Add 18% tax
// 3. Calculate final payable amount
// Ans.
const prices5 = [500, 1200, 3000, 800, 1500];
const totalPayable = prices5
.filter(price => price > 1000)
.map(price => price + price * 0.18)
.reduce((total, price) => total + price, 0);
// output: 5586

// Q9. Attendance System – Reward Points
// You are given daily attendance hours.
// **Tasks:**
// 1. Keep days with attendance >= 8 hours
// 2. Convert hours into points (1 hour = 10 points)
// 3. Find total points earned
// Ans.
const hours = [6, 8, 9, 7, 10];
const totalPointsEarned = hours
.filter(hour => hour >= 8)
.map(hour => hour * 10)
.reduce((total, points) => total + points, 0);
// output: 270

// Q10. Interview Brain Teaser 
// You are given a list of numbers.
// **Tasks:**
// 1. Keep only even numbers
// 2. Square each number
// 3. Find the sum of squares
// Ans.
const numbers7 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers7
.filter(num => num % 2 === 0)
.map(num => num * num)
.reduce((total, square) => total + square, 0);
// output: 20

//----------- Question for .Map(), .filter() and .reduce() --------------------------

// ### Q1. Grocery Store – Total Cost
// 1. Keep items costing more than 100
// 2. Add 5% tax
// 3. Find total cost
const prices6 = [50, 120, 300, 80, 200];
const totalCost = prices6
.filter(price => price > 100)
// Ans:[120, 300, 200]
.map(price => price + price * 0.05)
// Ans: [126, 315, 210]
.reduce((total, price) => total + price, 0);
// Ans: 651

// ### Q2. Fitness App – Weekly Calories
// 1. Keep days with workout minutes >= 20
// 2. Convert minutes to calories (1 min = 4 cal)
// 3. Find total calories
const minutes1 = [10, 25, 40, 15, 60];
const totalCalories1 = minutes1
.filter(min => min >= 20)
// Ans: [25, 40, 60]
.map(min => min * 4)
// Ans: [100, 160, 240]
.reduce((total, cal) => total + cal, 0);
// Ans: 500

// ### Q3. Exam Results – Total Passed Marks
// 1. Keep passing marks (>= 40)
// 2. Find total marks
const marks4 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks4
.filter(mark => mark >= 40)
// Ans: [55, 80, 45]
.reduce((total, mark) => total + mark, 0);
// Ans: 180

// ### Q4. Bank App – Total Credits
// 1. Keep only positive transactions
// 2. Find total credited amount
const transactions3 = [500, -200, 1000, -300, 700];
const totalCredits = transactions3
.filter(transactions => transactions > 0)
// Ans: [500,1000,700]
.reduce((total,transactions) => total + transactions, 0);
// Ans: 2200

// ### Q5. Online Sale – Discounted Bill
// 1. Keep items above 1000
// 2. Apply 15% discount
// 3. Find total payable amount
const prices7 = [800, 1500, 3000, 600, 1200];
const totalAmount1 = prices7
.filter(bill => bill > 1000)
// Ans: [1500, 3000, 1200]
.map(bill => bill - bill * 0.15)
// Ans: [1275, 2550, 1020]
.reduce((total, bill) => total + bill, 0);
// Ans: 4845

// ### Q6. Attendance – Reward Points
// 1. Keep attendance hours >= 7
// 2. Convert hours to points (×10)
// 3. Find total points
const hours1 = [5, 7, 8, 6, 9];
const totalPoints1 = hours1
.filter(points => points >= 7)
// ans: [7,8,9]
.map(points => points * 10)
// ans:[70,80,90]
.reduce((total,points) => total + points, 0);
// ans:[240]

// ### Q7. Delivery App – Total Distance
// 1. Keep trips longer than 5 km
// 2. Add 1 km bonus per trip
// 3. Find total distance
const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
.filter(km => km > 5)
// ans:[6,10,8]
.map(km => km + 1)
// ans:[7,11,9]
.reduce((total,km) => total + km, 0);
// ans:[27]

// ### Q8. Salary System – Final Salary
// 1. Keep salaries above 20,000
// 2. Add 2,000 bonus
// 3. Find total salary payout
const salaries = [18000, 25000, 30000, 15000];
const totalSalary = salaries
.filter(salary => salary > 20000)
// ans:[25000,30000]
.map(salary => salary + 2000)
// ans:[27000,32000]
.reduce((total,salary) => total + salary,0)
// ans:[59000]

// ### Q9. Study App – Total Study Time
// 1. Keep sessions longer than 1 hour
// 2. Convert hours to minutes
// 3. Find total study minutes

const hours2 = [0.5, 1.5, 2, 0.75, 3];
const totalStudy = hours2
.filter(hour => hour > 1)
// ans: [1.5, 2, 3]
.map(hour => hour * 60)
// ans: [90, 120, 180]
.reduce((total, hour) => total + hour, 0);
// ans: 390

// ### Q10. Electricity Usage – Monthly Bill
// 1. Keep usage above 100 units
// 2. Multiply by cost per unit (₹6)
// 3. Find total bill

const units = [80, 120, 200, 90, 150];
const totalBill = units
.filter(bill => bill > 100)
// ans:[120,200,150]
.map(bill => bill * 6)
// ans:[720,1200,900]
.reduce((total,bill) => total + bill,0);
// ans:[2820]

// ### Q11. Game Scores – Final Power Score
// 1. Keep scores above 40
// 2. Double each score
// 3. Find total power score
const scores3 = [30, 50, 90, 20, 70];
const totalPowerScore = scores3
.filter(score => score > 40)
// ans:[50,90,70]
.map(score => score * 2)
// ans:[100,180,140]
.reduce((total,score) => total + score,0);
// ans:[420]

// ### Q12. Travel App – Total Fare
// 1. Keep rides longer than 10 km
// 2. Add ₹50 service fee
// 3. Find total fare

const rides = [5, 12, 20, 8, 15];
const totalFare = rides
.filter(km => km > 10)
// ans:[12,20,15]
.map(km => km + 50)
// ans:[62,70,65]
.reduce((total,km) => total + km,0);
// ans:[197]

// ### Q13. Office Work – Productive Hours
// 1. Keep hours >= 6
// 2. Convert hours to minutes
// 3. Find total productive minutes

const hours3 = [4, 6, 8, 5, 9];
const totalProductiveMinutes = hours3
.filter(hour => hour >= 6)
// ans:[6,8,9]
.map(hour => hour * 60)
// ans:[360,480,540]
.reduce((total,hour) => total + hour,0);
// ans:[1380]

// ### Q14. Shopping Cart – Reward Coins
// 1. Keep purchases above ₹500
// 2. Give 10 coins per purchase
// 3. Find total coins earned

const purchases = [300, 800, 1200, 400];
const totalCoins = purchases
.filter(amount => amount > 500)
// ans:[800,1200]
.map(amount => 10)
// ans:[10,10]
.reduce((total,coins) => total + coins,0);
// ans:[20]

// ### Q15. Fuel App – Total Fuel Cost
// 1. Keep fuel purchases above 5 liters
// 2. Multiply by ₹105 per liter
// 3. Find total cost

const liters = [3, 6, 10, 4, 8];
const totalFuelCost = liters
.filter(liter => liter > 5)
// ans:[6,10,8]
.map(liter => liter * 105)
// ans:[630,1050,840]
.reduce((total,cost) => total + cost,0);
// ans:[2520]

// ### Q16. Interview Classic – Sum of Cubes
// 1. Keep odd numbers
// 2. Cube each number
// 3. Find total sum

const numbers2 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers2
.filter(num => num % 2 !== 0)
// ans:[1,3,5]
.map(num => num ** 3)
// ans:[1,27,125]
.reduce((total,num) => total + num,0);
// ans:[153]

// ### Q17. Performance Tracking – Bonus Points
// 1. Keep values above average
// 2. Add 5 bonus points
// 3. Find total score
const scores4 = [10, 20, 30, 40, 50];
const averageScore = scores4.reduce((sum, score) => sum + score, 0) / scores4.length;
// ans:30
const totalBonusPoints = scores4
.filter(score => score > averageScore)
// ans:[40,50]
.map(score => score + 5)
// ans:[45,55]
.reduce((total,score) => total + score,0);
// ans:[100]

// ### Q18. Subscription App – Final Bill
// 1. Keep subscriptions above ₹300
// 2. Add 18% tax
// 3. Find final bill

const plans = [199, 399, 599, 299];
const finalBill = plans
.filter(plan => plan > 300)
// ans:[399,599]
.map(plan => plan + (plan * 0.18))
// ans:[469.82,707.82]
.reduce((total,plan) => total + plan,0);
// ans:[1177.64]

// ### Q19. Learning App – Achievement Score
// 1. Keep scores >= 60
// 2. Square each score
// 3. Find total score

const scores5 = [45, 60, 70, 30, 80];
const totalAchievementScore = scores5
.filter(score => score >= 60)
// ans:[60,70,80]
.map(score => score * score)
// ans:[3600,4900,6400]
.reduce((total,score) => total + score,0);
// ans:[14900]

// ### Q20. Interview Finisher 
// 1. Keep numbers divisible by 3
// 2. Multiply by 10
// 3. Find total sum

const numbers3 = [3, 6, 9, 10, 12];
const totalSum = numbers3
.filter(num => num % 3 === 0)
// ans:[3,6,9,12]
.map(num => num * 10)
// ans:[30,60,90,120]
.reduce((total,num) => total + num,0);
// ans:[300]

//find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element --> callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet", "Desktop", "Smart Watch"];
let find_product = product. find( (item) => {
  // console. log("can't find product"); // not working why ??
  if (item === "Mobile") {
    return true;
  } else if (item === "Tablet") {
    return true;
  } else {
    return false;
  }
});

//find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
let people = ["John", "Sara", "Mike", "Anna", "David", "Sara"];
// find -- > you are looking for the first person named "Sara" in the list and stop searching (Pehli var j male, bas e j and Anagal check j na kare)
let person = people. find ( (name) => name === "Sara");
console. log(person);

// filter -- > you want to find all visitors named "Sara" in the list (all data check kare and list na end sudhi check kare)
let AllSara = people. filter( (name) => name === "Sara");
console. log(AllSara);

// example 2: Book bus for travel

// some
// check kare chhe ke array ma koi pan ek item codition satisfy kare chhe ke nahi
// condition true aave tyare stop kare
// some() vs find() -- > some() can't return you value its return true or false, find() return value of array
// give ans in true and false
let marks6 = [10, 20, 35, 90];
let any = marks1. some( (val) => {
  if (val > 85) return true;
  // if (val < 85) retur "need improvement";
});
console.log(any)
// use case -- check if some product are out of stock in your cart

//every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
let def =[20, 30, 90, 45];
let num = def.every(function(val){
  return val < 40;
})
// use case --> check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method --> condition --> output
// .some() --> item === "Mobile" --> true
// .find() --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]
// .every() --> item === "Mobile" --> false

// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr5 = [1, 2, 3, 4, 5]
// let j = arr5[0];
// let k = arr5[2]
let [ j, , k] = arr5; // -- > destructuring
// let [j, , k] = arr;
console. log(k);
let user_data = ["text", "text@gmail.com", "Male", "Surat"]
// name, email, gender, city
// console.log("name", name)

let [name, email, gender, city] = user_data; // default value
console. log( "name :", name , "" ,"email :", email, "", "gender :", gender, "", "city :", city);

// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not copy value(when you change into arr4 that will be change arr3 too)
let arr9 = [ ... arr8];
// ... --> rest --> into function
// ... --> spred --> into Array and Object
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [ ... temp_arr, ... temp_arr2];