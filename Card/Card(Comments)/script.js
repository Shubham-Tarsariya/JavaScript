function ShowUsers() {
    fetch('https://jsonplaceholder.typicode.com/comments')
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

function RenderUi(comment) {

    let body = document.querySelector("body");

    body.innerHTML += `
    <div class="card-animate backdrop-blur-xl bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 max-w-md hover:scale-105 transition duration-300 m-5">

      <div class="flex justify-between items-center mb-4">
        <span class="text-sm text-gray-600">Post ID: ${comment.postId}</span>
        <span class="text-sm text-gray-600">ID: ${comment.id}</span>
      </div>

      <h2 class="text-xl font-bold text-gray-800 mb-3">
        ${comment.name}
      </h2>

      <p class="text-blue-700 font-medium mb-4">
        ${comment.email}
      </p>

      <p class="text-gray-700 leading-relaxed whitespace-pre-line">
        ${comment.body}
      </p>

    </div>`;
}