// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for-loops? when you konw how many times you want to repeat a block
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for(ex. 1 -> 50 -> increment by 1)
// (start; end; change)
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 20; i >= 10; i--){
//     console.log(i);
// }

//----------------------------------------------------------------------------
// while loop 
// kaya thi jaavanu chhe --> kya rokavanu chhe --> keci rite javanu chhe
// while (ex.1 -> Hello world -> stop when condition false)
// start
// while(end){
// code
// change
// }
// let j = 10;
// while (j <= 20){
//     console.log("j :",j);
//     j++;
// }

// // loop
// let k = 50;
// while(k >= 20){
//     console.log(k);
//     k--;
// }

// let a = 60;
// while(a >= 20){
//     console.log(a);
//     a--;
// }

// let c=30;
// while (c>= 20){
//     console.log(c);
//     c--;
// }

// let d = 10;
// while(d <= 20){
//     console.log(d);
//     d++;
// }

// let f = 50;
// while(f <= 60){
//     console.log(f);
//     f++;
// }

// let q = 50;
// while(q <= 60){
//     console.log(q);
//     q++;
// }

//---------------------------------------------------------------------------------
// do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);

// let g = 10;
// do{
//     console.log("do while:",g);
//     g++;
// } while (g <= 20);

// let h = 10;
// do{
//     console.log("do while1:",h);
//     h--;
// }while (h >= 1);

// //----------------------------------------------------------------------------
// // break
// for(let k = 1; k <= 201; k++){
//     console.log(k);
//     if(k === 32) {
//         break;
//     }
// }

// // Example
// for(let k = 64; k >= 1; k--){
//     console.log(k);
//     if(k === 32) {
//         break;
//     }
// }

// //----------------------------------------------------------------------------
// // continue
// for(let a = 1; a <= 10; a++){
//     if(a === 5){
//         continue;
//     }
//     console.log(a);
// }

// //Example
// for(let h = 10; h >= 1; h--){
//     if(h === 5){
//         continue;
//     }
//     console.log(h);
// }

// Example:1 Print number from 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++){
    console.log(i);
}
// output: 1 2 3 4 5 6 7 8 9 10
// why: because the loop starts at 1 and increments by 1 until it reaches 10, printing each number in the process.

// Example:2 Print number from 10 to 1 using while loop.
let j = 10;
while (j >= 1){
    console.log(j);
    j--;
}
// output: 10 9 8 7 6 5 4 3 2 1
// why: because the loop starts at 10 and decrements by 1 until it reaches 1, printing each number in the process.

// Example:3 Print even numbers from 1 to 20 using for loop.
for(let k = 1; k <= 20; k++){
    if(k % 2 === 0){
        console.log(k);
    }
}
// output: 2 4 6 8 10 12 14 16 18 20
// why: because the loop iterates through numbers 1 to 20 and checks if each number is even using the modulus operator. If the number is even, it gets printed.

// Example: 4 Print odd numbers from 1 to 15 using while loop.
let p= 1;
while(p<=15){
    if(p%2 !==0){ // or (p%2 ===1)
    console.log(p);
    }
    p++;
}
// output: 1 3 5 7 9 11 13 15
// why: because the loop starts at 1 and increments by 1 until it reaches 15, checking each number to see if it is odd using the modulus operator. If the number is odd, it gets printed.

// Example:5 Print the multiplication table of 5.
for(let q=1; q<=10; q++){
    console.log(`5 x ${q} = ${5*q}`);
}
// output: 5 x 1 = 5 
//         5 x 2 = 10
//         5 x 3 = 15
//         5 x 4 = 20
//         5 x 5 = 25
//         5 x 6 = 30
//         5 x 7 = 35
//         5 x 8 = 40
//         5 x 9 = 45
//         5 x 10 = 50
// why: because the loop iterates from 1 to 10, multiplying 5 by the loop variable and printing the result in a formatted string for each iteration.

// Example:6 Find the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i=1; i<=100; i++){
    // let sum =0;
    sum = sum + i;
    // console.log(sum);
}
console.log(sum);
// output: 5050
// why: because the loop iterates through numbers 1 to 100, adding each number to the sum variable. After the loop completes, the total sum is printed.

// Example:7 Print all numbers between 1 to 50 that are divisible by 3.
for(let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}
// output: 3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48
// why: because the loop iterates through numbers 1 to 50 and checks if each number is divisible by 3 using the modulus operator. If the number is divisible by 3, it gets printed.

// Example:8 Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let num = prompt("give a number");
// for(let r=1; r <=num; r++){
//     if(r%2 ===0){
//         console.log(r, " is even");
//     }else{
//         console.log(r, " is odd");
//     }
// }
// output: (if user inputs 5)
//         1 is odd
//         2 is even
//         3 is odd
//         4 is even
//         5 is odd
// why: because the loop iterates through numbers 1 to the user-provided number, checking each number to see if it is even or odd using the modulus operator. It then prints the result accordingly.

// Example:9 Count how many numbers between 1 to 100 are divisible by 3 or 5
for(let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }
}
// output: 3 5 6 9 10 12 15 18 20 21 24 25 27 30 33 35 36 39 40 42 45 48 50 51 54 55 57 60 63 65 66 69 70 72 75 78 80 81 84 85 87 90 93 95 96 99 100
// why: because the loop iterates through numbers 1 to 100 and checks if each number is divisible by 3 or 5 using the modulus operator. If the number meets either condition, it gets printed.

// Example:10 
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
// output: 1 2 3 4 5 6 7
// why: because at 7 the condition i%7===0 becomes true and break statement stops the loop.

// Example:11
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
// output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20
// why: because when i is multiple of 3, continue statement skips the current iteration and moves to next iteration.

// Example:12 
count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    if(count ===5){
        break;
    }
}   
// output: 1 3 5 7 9
// why: because we are counting odd numbers and when count reaches 5, break statement stops the loop.