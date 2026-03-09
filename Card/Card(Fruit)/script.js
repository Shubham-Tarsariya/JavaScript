function ShowUsers() {
    fetch('https://corsproxy.io/?https://www.fruityvice.com/api/fruit/all')
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        data.forEach(fruit => {
            RenderUi(fruit);
        });
    });
}
ShowUsers();
function RenderUi(fruit){
    let body = document.querySelector("body");
    body.innerHTML += `
    <div class="m-5 backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-8 w-96 transition duration-500 transform hover:-translate-y-3 hover:scale-105">

    <div class="flex justify-between items-center mb-4">

    <span class="text-sm font-semibold text-blue-600">
    Fruit ID: ${fruit.id}
    </span>

    <span class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
    Fruit
    </span>

    </div>

    <h2 class="text-3xl font-bold text-gray-800 mb-4">
    ${fruit.name}
    </h2>

    <div class="bg-white/50 backdrop-blur-md rounded-xl p-4 mb-6">

    <p class="text-gray-700 text-sm">
    <strong>Family:</strong> ${fruit.family}
    </p>

    <p class="text-gray-700 text-sm">
    <strong>Order:</strong> ${fruit.order}
    </p>

    <p class="text-gray-700 text-sm">
    <strong>Genus:</strong> ${fruit.genus}
    </p>

    </div>

    <div class="grid grid-cols-2 gap-3 mb-6">

    <div class="bg-white/60 p-3 rounded-lg text-center">
    <p class="text-xs text-gray-500">Calories</p>
    <p class="font-bold text-blue-700">${fruit.nutritions.calories}</p>
    </div>

    <div class="bg-white/60 p-3 rounded-lg text-center">
    <p class="text-xs text-gray-500">Sugar</p>
    <p class="font-bold text-blue-700">${fruit.nutritions.sugar}</p>
    </div>

    <div class="bg-white/60 p-3 rounded-lg text-center">
    <p class="text-xs text-gray-500">Carbs</p>
    <p class="font-bold text-blue-700">${fruit.nutritions.carbohydrates}</p>
    </div>

    <div class="bg-white/60 p-3 rounded-lg text-center">
    <p class="text-xs text-gray-500">Protein</p>
    <p class="font-bold text-blue-700">${fruit.nutritions.protein}</p>
    </div>

    </div>

    <button class="w-full bg-green-500 text-white py-2 rounded-lg
    hover:bg-green-600 transition duration-300">
    View Details
    </button>

    </div>`
}