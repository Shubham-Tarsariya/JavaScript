// loops -- repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6

// for loop
// why use for-loops? when you konw how many times you want to repeat a block
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for(ex. 1 -> 50 -> increment by 1)
// (start; end; change)
for(let i = 1; i <= 10; i++){
    console.log(i);
}
for(let i = 20; i >= 10; i--){
    console.log(i);
}

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

let g = 10;
do{
    console.log("do while:",g);
    g++;
} while (g <= 20);

let h = 10;
do{
    console.log("do while1:",h);
    h--;
}while (h >= 1);