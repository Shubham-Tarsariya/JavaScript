let d = 20;
function abc(){
    console.log(d);
}
function def(){
    let d = 25;
    abc();
}
def();

function parent(){
    let a = 12; // private variable
    return function(){
        console.log(a);
    };
}
let fnc1 = parent()();
console.log(fnc1);

// create toaster
function CreateToaster(config){
    let toast = document.querySelector(".toast");
    return function (msg){
        let div = document.createElement("div");
        div.className = `toaster ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-white/50 text-orange-600 border border-orange-600 "} px-6 py-3 inline-block top-4 right-4 rounded-md pointer-event-none`;
        div.textContent = msg;

        toast.className += `${config.positionX === "left" ? "left-10" : "right-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

        toast.appendChild(div);

        setTimeout(() => {
            toast.removeChild(div);
        }, config.duration * 1000);
    };
}

let toaster = CreateToaster({
    positionX: "right",
    positionY: "top",
    theme: "light",
    duration: 3,
});

toaster("Welcome to Profile");
setTimeout(() => {
    toaster("You have 2 notifications");
}, 3000);
setTimeout(() => {
    toaster("Product Added / Uploaded Successfully");
}, 3500);