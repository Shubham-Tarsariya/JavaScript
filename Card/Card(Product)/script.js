function ShowUsers() {
    fetch('https://dummyjson.com/products?limit=10&select=title,price')
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        data.products.forEach(products => {
            RenderUi(products);
        });
    });
}
ShowUsers();
function RenderUi(products){
    let body = document.querySelector("body");
    body.innerHTML +=
    `
    <div class="m-5 backdrop-blur-lg bg-white/40 border border-white/30
    shadow-2xl rounded-3xl p-8 w-96 transition duration-500 transform hover:-translate-y-3 hover:scale-105">

    <div class="flex justify-between items-center mb-4">

    <span class="text-sm font-semibold text-blue-600">
    Product ID: ${products.id}
    </span>

    <span class="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">
    Product
    </span>

    </div>

    <h2 class="text-2xl font-bold text-gray-800 mb-6">
    ${products.title}
    </h2>

    <div class="bg-white/50 rounded-xl p-4 mb-6 backdrop-blur-sm">
    <p class="text-gray-600 text-sm">
    Premium product available now.
    </p>
    </div>

    <div class="flex justify-between items-center">

    <span class="text-2xl font-bold text-blue-700">
    $${products.price}
    </span>

    <button class="bg-blue-500 text-white px-4 py-2 rounded-lg
    hover:bg-blue-600 transition duration-300">
    Add to Cart
    </button>

    </div>

    </div>   `
}