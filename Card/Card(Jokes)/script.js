function ShowUsers() {
    fetch('https://teehee.dev/api/joke')
    .then((rawdata) => {
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        RenderUi(data);
    });
}
ShowUsers();

function RenderUi(joke){

    let body = document.querySelector("body");

    body.innerHTML = `
    <div class="backdrop-blur-xl bg-white/40 border border-white/30
    shadow-2xl rounded-3xl p-8 w-96
    transition duration-500 transform hover:-translate-y-3 hover:scale-105">

    <div class="flex justify-between items-center mb-4">

    <span class="text-sm font-semibold text-blue-600">
    Joke ID: ${joke.id}
    </span>

    <span class="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
    Joke
    </span>

    </div>

    <h2 class="text-xl font-bold text-gray-800 mb-4">
    ${joke.question}
    </h2>

    <div class="bg-white/50 backdrop-blur-md rounded-xl p-4 mb-6">
    <p class="text-gray-700 text-sm">
    ${joke.answer}
    </p>
    </div>

    <button onclick="ShowUsers()"
    class="w-full bg-blue-500 text-white py-2 rounded-lg
    hover:bg-blue-600 transition duration-300">
    Generate Random Joke
    </button>

    </div>
    `;
}