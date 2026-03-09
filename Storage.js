// localStorage API: setItem, getItem, removeItem, clear
// localstorage -- > save that data into browser's storage, after close browser data wasn't deleted
// (browser nu aevu storage ke jema data store thai chhe and browser band thai jay to pan data delete thato nathi)
// ~ 5 MB storage,

// setItem
// localStorage.setItem("key", value)
localStorage.setItem("user", "Test_User");

// getItem
// localStorage.getItem("Key_name")
console.log(localStorage.getItem("user"));

// removeItem
// localStorage.removeItem("name")
localStorage.removeItem("user");

// updateItem
localStorage.setItem("user","Demo_user");

// sessionStorage API
// session Storage --> save that for temporarily time when you close tab delete was deleted
// (aa storage data ne temporarily time mate save kari ne rakhe chhe, jyare pan tab close karsho tyare teni sathe data pan delete thai jai chhe)
// ~ 5Mb Storage

// setItem
sessionStorage.setItem("email","user@test.com");

// getItem
console.log(sessionStorage.getItem("email"));

// removeItem
// sessionStorage.removeItem("email");

// updateItem
sessionStorage.setItem("email", "demo@test.com");

// clear
// sessionStorage. clear();

// Storing/retrieving strings vs JSON
// save as string into LocalStorage and SessionStorage -- try to save array and string

// JSON. stringify
localStorage. setItem(
    "data",
    JSON. stringify( [{ username: "test", email: "test@mail.com", age: 25 }]),
);

// JSON. parse
let a = JSON. parse(localStorage.getItem("data") );


// Basic cookie structure (manual key = Value; )
// Cookie -- > store data into browser cookies
// (Cookie data ne browser na cookies name ni property ma save kare chhe, cookie no use light data save karva mate thai chhe)
// when you reload web page data will be automatically send to server
// ~4 KB storage
document. cookie = "email= test@mail.com";

// max age
document.cookie = "age = 10; max-age = 60"; //60 sec

// date and time
document. cookie = "username=meet; expires=Wed, 28 Feb 2026 12:00:00 GMT";


// dark light mode --> save into local storage
// window.matchMedia('(prefers-color-schema: dark)')
let btn = document.querySelector("button");
let body = document.querySelector("body");

if (localStorage.getItem("theme")) {
    body.className = "";
    body.classList.add(localStorage.getItem("theme"));
} 

btn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.add("dark");
      body.classList.remove("light");
      btn.textContent = "light Mode";
      localStorage.setItem("theme","dark");
    }else{
      body.classList.add("light");
      body.classList.remove("dark");
      btn.textContent = "Dark Mode";
      localStorage.setItem("theme","light");
    }
});
