function ShowData() {

fetch("https://api.jikan.moe/v4/anime?q=movie")
.then((rawdata) => {
    return rawdata.json();
})
.then((data) => {

    console.log(data);

    let newdata = data.data.slice(0,5); // first 5 movies

    newdata.forEach(movie => {
        showCards(movie);
    });

});

}


function showCards(movie){

let body = document.querySelector("body");

body.innerHTML += `

<div class="glass card-animate max-w-5xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 mb-10">

<div class="relative">

<img src="${movie.images.jpg.large_image_url}" class="w-full h-full object-cover">

<div class="absolute top-4 left-4 bg-white/60 backdrop-blur px-4 py-1 rounded-full text-sm font-semibold">
${movie.type}
</div>

</div>


<div class="p-8 flex flex-col justify-between">

<div>

<h1 class="text-3xl font-bold text-gray-800 mb-2">
${movie.title}
</h1>

<p class="text-sm text-gray-500 mb-4">
${movie.title_japanese || ""}
</p>

<p class="text-gray-600 text-sm leading-relaxed mb-6">
${movie.synopsis ? movie.synopsis.substring(0,200) + "..." : "No description available"}
</p>


<div class="grid grid-cols-2 gap-4 text-sm">

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Genre</p>
<p class="text-gray-600">${movie.genres.map(g => g.name).join(", ")}</p>
</div>

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Studio</p>
<p class="text-gray-600">${movie.studios[0]?.name || "Unknown"}</p>
</div>

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Duration</p>
<p class="text-gray-600">${movie.duration || "N/A"}</p>
</div>

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Release</p>
<p class="text-gray-600">${movie.aired.string}</p>
</div>

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Score</p>
<p class="text-gray-600">${movie.score || "N/A"} ⭐</p>
</div>

<div class="glass p-3 rounded-xl">
<p class="font-semibold text-gray-700">Rating</p>
<p class="text-gray-600">${movie.rating || "N/A"}</p>
</div>

</div>

</div>


<div class="flex gap-4 mt-8">

<a 
href="${movie.url}"
target="_blank"
class="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition">
View Details
</a>

<a 
href="${movie.trailer.embed_url || '#'}"
target="_blank"
class="px-6 py-2 bg-white/60 backdrop-blur rounded-xl shadow hover:bg-white transition">
Watch Trailer
</a>

</div>

</div>

</div>

`;

}

ShowData();