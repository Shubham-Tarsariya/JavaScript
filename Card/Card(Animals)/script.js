function ShowUsers() { 
    fetch('https://extinct-api.herokuapp.com/api/v1/animal/')
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        data.data.forEach(animal => {
            RenderUi(animal);
        });
    });
}

ShowUsers();

function RenderUi(animal){

    let body = document.querySelector("body");
    body.innerHTML +=  `
    <div class="m-5 backdrop-blur-xl bg-white/40 border border-white/30
    shadow-2xl rounded-3xl w-80 overflow-hidden
    transition duration-500 transform hover:-translate-y-3 hover:scale-105">

    <img src="${animal.imageSrc}"
    class="w-full h-52 object-cover"/>

    <div class="p-6">

    <div class="flex justify-between items-center mb-3">

    <span class="text-sm font-semibold text-blue-600">
    Last Record: ${animal.lastRecord}
    </span>

    <span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">
    Extinct
    </span>

    </div>

    <h2 class="text-xl font-bold text-gray-800 mb-2">
    ${animal.commonName}
    </h2>

    <p class="text-sm text-gray-500 italic mb-3">
    ${animal.binomialName}
    </p>

    <p class="text-sm text-gray-600 mb-4 line-clamp-3">
    ${animal.shortDesc}
    </p>

    <div class="flex justify-between items-center">

    <a href="${animal.wikiLink}" target="_blank"
    class="bg-blue-500 text-white px-4 py-2 rounded-lg
    hover:bg-blue-600 transition duration-300">
    Learn More
    </a>

    </div>

    </div>

    </div>

    `
}