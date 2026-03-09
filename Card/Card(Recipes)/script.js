function ShowUsers() {
    fetch('https://dummyjson.com/recipes?limit=10&select=name,image')
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        data.recipes.forEach(recipes => {
            RenderUi(recipes);
        });
    });
}
ShowUsers();
function RenderUi(recipes){
    let body = document.querySelector("body");
    body.innerHTML +=  
    `
    <div class="m-5 backdrop-blur-xl bg-white/40 border border-white/30
    shadow-2xl rounded-3xl w-80 overflow-hidden
    transition duration-500 transform hover:-translate-y-3 hover:scale-105">

    <img src="${recipes.image}"
    class="w-full h-52 object-cover"/>

    <div class="p-6">

    <div class="flex justify-between items-center mb-3">

    <span class="text-sm font-semibold text-blue-600">
    Recipe ID: ${recipes.id}
    </span>

    <span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
    Food
    </span>

    </div>

    <h2 class="text-xl font-bold text-gray-800 mb-4">
    ${recipes.name}
    </h2>

    <div class="flex justify-between items-center">

    <button class="bg-red-500 text-white px-4 py-2 rounded-lg
    hover:bg-red-600 transition duration-300">
    View Recipe
    </button>

    </div>

    </div>

    </div> `
}