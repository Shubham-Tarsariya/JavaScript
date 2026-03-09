// // Koi pan Code JS ma line by line run thase
// // Ane te Natural Pattern hoy chhe ke code line by line chale
// // pan code ma kayre aevi pan line aave ke je wait kare and tena pacchi no code run thay jaay

// const { FcNoVideo } = require("react-icons/fc");

// const { useState } = require("react");

// setTimeout(() =>{
//     console. log ("Good Evening");
// }, 2000); // asnyc

// console.log ("hi");
// console.log ("Hello"); // sync

// // SYNC -- aevo code jo line by line chalse

// // ASYNC -- aevo code ke je ready thai pacchi chale

// // // Callback Pattern and Callback hell
// // Callback Pattern
// function abc(val){
//     setTimeout(() => {
//         console.log("Value", val);
//     }, Math.floor(Math.random() * 10) * 1000,);
// }
// abc(50);

// function callbackPattern(fnc){
//     setTimeout(() => {
//         console.log(fnc());
//     }, Math.floor(Math.random() * 10) * 1000,);
// }

// callbackPattern(function(){
//     console.log("Hey, Hello, How Are You?");// callback Pattern
// });

// ek function ne tame ek bijo function na parameter ma mokali aapo chho, to te parameter walu fnc ne kevai chhe callback function

// callback hell
// JavaScript ni library (React/Angular/vue) function hoy teno use karvo --> callback hell
function showProfile(username, cb){
    console.log("Fetching Profile Data......")
    setTimeout(() => {
        cb({id: 1, username});
    }, 2000);
}
function ShowPost(id, cb){
    console.log("Fetching All Posts......");
    setTimeout(() => {
        cb({ id: id, posts: ["post1", "post2", "post3"] });
    });
}
function SavePost(id, cb) {
    console.log("Fetching Saved Posts.....")
    setTimeout(() => {
         cb({ id: id, saved: ["post3", "post4", "post5"] });
    }, 3500);
} // Alaready into liabrary

function like(id, cb){
    console.log("Counting Likes......");
    setTimeout(() => {
        cb({ id:id, likes: 50});
    }, 3700);
}

function comment(id, cb){
    console.log("Showing Comments......");
    setTimeout(() => {
        cb({ id:id, comments: ["aa", "bb", "cc", "dd", "ee"]});
    }, 3800);
}

showProfile("testuser", function(data){
    console.log(data);
    ShowPost(data.id, function(posts){
        console.log(posts);
        SavePost(data.id, function(saved){
            console.log(saved);
            like(data.id, function(like){
                console.log(like);
                comment(data.id, function(com){
                    console.log(com);
                })
            })
        })
    });
});

// Promises: resolve and reject with then and catch
// jyare tame ek promise banavo chho, tyare te promise be(two) states mathi koi ek state ma jase.
// one state: resolve
// second state: reject
// and we have to write a code for both states

let pr = new Promise(function (resolve, reject) {
    setTimeout (() => {
        let rn = Math. floor(Math. random() * 10);
        if (rn > 5) {
            resolve("Resolve" + rn) ;
        } else {
            reject("reject" + rn);
        }
    }, 3000);
});
pr.then(function (val){
    console.log(val);
}).catch(function (val){
    console.log(val);
});

// async await --> try and catch
let pr1 = new Promise(function (resolve, reject) {
    setTimeout (() => {
        let rn = Math. floor(Math. random() * 10);
        if (rn > 5) {
            resolve("async Resolve" + rn) ;
        } else {
            reject("async reject" + rn);
        }
    }, 3000);
});

async function abc(){
    try{
        let val = await pr1;
        console.log(val);
    } catch (error){
        console.log(error);
    }
}
abc();