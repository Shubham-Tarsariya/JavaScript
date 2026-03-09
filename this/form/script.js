let form = document.querySelector("form");
let username = document.querySelector('input[name="name"]')
let roleInput = document.querySelector('input[name="role"]')
let bioInput = document.querySelector('input[name="bio"]')
let imgInput = document.querySelector('input[name="img"]')
let users = document.querySelector(".users")

const userManager = {

    users: [],

    init: function () {
        form.addEventListener("submit", this.submit.bind(this))
    },

    submit: function (e) {
        e.preventDefault();
        this.addUser()
    },

    addUser: function () {
        this.users.push({ 
            username: username.value,
            role: roleInput.value,
            bio: bioInput.value,
            img: imgInput.value,
        })
        form.reset()
        this.renderUi()
    },

    renderUi: function(){
        users.textContent = ""

        this.users.forEach(user => {

            let card = document.createElement("div")
            card.className = "card bg-white/80 backdrop-blur rounded-2xl flex flex-col items-center gap-4 p-4"

            let img = document.createElement("img")
            img.src = user.img
            img.className = "w-72 h-72 rounded-full object-cover my-5 border border-blue-100"

            let h2 = document.createElement("h2")
            h2.textContent = user.username
            h2.className = "text-2xl font-bold text-blue-800 text-center"

            let role = document.createElement("p")
            role.textContent = user.role
            role.className = "text-xl font-medium text-gray-500 text-center"

            let bio = document.createElement("p")
            bio.textContent = user.bio
            bio.className = "px-4 text-lg text-gray-400 text-center"

            card.append(img, h2, role, bio)
            users.appendChild(card)
        })
    },

    // validation:
}
userManager.init();