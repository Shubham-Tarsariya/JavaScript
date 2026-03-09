// SetTimeout, clearTimeout
// setTimeout --> run only one time
// timeout -- in ms

let timmer = setTimeout (() => {
    console.log("Hello");
}, 2000);

clearTimeout(timmer);

// setInterval, clearInterval
// setInterval -- > run into loop(infinte times)
let timmer1 = setInterval(() => {
    console.log("Hi");
}, 2000);

// clear Interval
clearInterval(timmer1);

// counter
let number = 0;
setInterval(() => {
    if(number <= 10) {
        console.log(number);
        number++;
    }
}, 1000);

// popup windows
let card = document. querySelector(".card");
let btn = document. querySelector("button");

setInterval(() => {
    card.style.display = "block";
}, 5000);

btn.addEventListener("click", () => {
    card.style.display = "none";
});

// Real use: deplaying

// Downloading card
let count = 0;

let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");

setInterval(() => {
    if(count <= 100){
        console.log(count);
        bar.style.width=`${count}%`;
        percent.textContent = count + "%";
        count++;
    }
    // if(img < 500){
    //     photo.style.height = `${img}px`;
    //     img++;
    // }
}, 1000);

// setTimeout Vs setInterval