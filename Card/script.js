// 1. select --> Event --> Function(Change)
// 2. Show Form and Close Form
// 3. form - validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn

let formContainer = document.querySelector(".form-container");
let Add = document.querySelector("#add-note");
let close = document.querySelector(".closeForm");

Add.addEventListener("click", () => {
  formContainer.style.display = "block";
});

close.addEventListener("click", () => {
  formContainer.style.display = "none";
});

// Form Validation
let form = document.querySelector("form");
const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']",
);
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']",
);
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']",
);
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']",
);
const categoryRadios = form.querySelectorAll("input[name='category']");

console.log(
  imageUrlInput,
  fullNameInput,
  homeTownInput,
  purposeInput,
  categoryRadios,
);
form.addEventListener("submit", (z) => {
  z.preventDefault();

  const imageUrl = imageUrlInput.value.trim();
  const username = fullNameInput.value.trim();
  const home = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  let selected = false;
  categoryRadios.forEach((cat) => {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (username === "") {
    alert("Please Enter Your Full Name");
    return;
  }
  if (imageUrl === "") {
    alert("Please Enter Image URL");
    return;
  }
  if (home === "") {
    alert("Please Enter Your Home Town");
    return;
  }
  if (purpose === "") {
    alert("Please Enter Your Purpose");
    return;
  }

  // reset form
  form.reset();

  // save data in local Storage
  saveData({
    imageUrl,
    username,
    home,
    purpose,
    selected,
  });

  // close form
  formContainer.style.display = "none";
});

function saveData(data_obj) {
  let data = JSON.parse(localStorage.getItem("data_notes")) || [];
  data.push(data_obj);

  localStorage.setItem("data_notes", JSON.stringify(data));
}

// Show cards to HTML
let stack = document.querySelector(".stack");
function RenderUi() {
  let allData = JSON.parse(localStorage.getItem("data_notes"));
  // console.log(allData);

  allData.forEach((note) => {
    // div(card)
    let card = document.createElement("div");
    card.classList.add("card");
    stack.appendChild(card);

    // img(avatar)
    let img = document.createElement("img");
    img.classList.add("avatar");
    card.appendChild(img);
    img.setAttribute("src", note.imageUrl);

    // h2
    let h2 = document.createElement("h2");
    card.appendChild(h2);
    h2.textContent = note.username;

    // div(info) ==> span (home,town)
    let info1 = document.createElement("div");
    info1.classList.add("info");
    card.appendChild(info1);

    let home = document.createElement("span");
    home.textContent = "Home Town: ";
    let town = document.createElement("span");
    town.textContent = note.home;
    info1.appendChild(home);
    info1.appendChild(town);

    // div(info) ==> span (purpose, note_msg)
    let info2 = document.createElement("div");
    info2.classList.add("info");
    card.appendChild(info2);

    let purpose = document.createElement("span");
    purpose.textContent = "Purpose: ";
    let note_msg = document.createElement("span");
    note_msg.textContent = note.purpose;
    info2.appendChild(purpose);
    info2.appendChild(note_msg);

    // div(button) ==> button(call, msg)
    let buttons = document.createElement("div");
    buttons.classList.add("buttons");
    card.appendChild(buttons);

    let call = document.createElement("button");
    call.classList.add("call");
    call.innerHTML = '<i class="ri-phone-line"></i> Call';
    let msg = document.createElement("button");
    msg.classList.add("msg");
    msg.innerHTML = '<i class="ri-message-2-line"></i> Message';
    buttons.appendChild(call);
    buttons.appendChild(msg);
  });
}
RenderUi();

// up btn And down Btn
let upBtn = document.querySelector("#upBtn");

upBtn.addEventListener("click", () => {
  let lastChild = stack.lastElementChild;
  console.log(lastChild);

  if (lastChild) {
    stack.prepend(lastChild, stack.firstElementChild);
    UpdateStack();
  }
});

downBtn.addEventListener("click", () =>{
    let firstChild = stack.firstElementChild;

    if(firstChild){
        stack.append(firstChild, stack.firstElementChild);
        UpdateStack();
    }
});

function UpdateStack(){
    let cards = document.querySelectorAll(".card");

    for(let index = 0; index < 3; index++){
        const card = cards[index];
        card.style.zIndex = 3 - index;
    }
}