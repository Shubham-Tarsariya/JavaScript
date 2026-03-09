function ShowUsers() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })
    .then((data) => {
        console.log(data);

        data.forEach(user => {
            RenderUi(user);
        });
    });
}
ShowUsers();

function RenderUi(posts){
    let body = document.querySelector("body");

    body.innerHTML += `
    <div class="m-5 backdrop-blur-xl bg-white/40 border border-white/30 
                shadow-xl rounded-2xl p-8 max-w-md
                transition transform hover:-translate-y-2 hover:scale-105 duration-300">

      <div class="mb-4">
        <span class="text-sm text-blue-600 font-semibold">
            ${posts.userId}
        </span>
      </div>

      <h2 class="text-xl font-bold text-gray-800 mb-3">
        ${posts.title}
      </h2>

      <p class="text-gray-700 leading-relaxed">
        ${posts.body}
      </p>

      <div class="mt-6 flex justify-between text-sm text-gray-600">
        <span>${posts.id}</span>
        <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          Post
        </span>
      </div>

    </div>`;
}