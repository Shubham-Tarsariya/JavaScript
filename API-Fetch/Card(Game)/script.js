function ShowData(){
    fetch("https://corsproxy.io/?https://www.freetogame.com/api/games")
    .then((rawdata) => {
        return rawdata.json();
    })
    .then((data) => {

        let newdata = data.filter((game) => {
            return game.id <= 20;
        });

        console.log(newdata);

        newdata.forEach(game => {
            showCards(game);
        });

    });
}

function showCards(game){
    let body = document.querySelector("body");

    body.innerHTML += ` 
    <div class="game-card">
        <img src="${game.thumbnail}" class="thumbnail">

        <div class="content">
            <h2 class="title">${game.title}</h2>
            <p class="description">${game.short_description}</p>
            
            <div class="meta-grid">
                <div class="meta-item">
                    <b>Genre</b>
                    <span>${game.genre}</span>
                </div>

                <div class="meta-item">
                    <b>Platform</b>
                    <span>${game.platform}</span>
                </div>

                <div class="meta-item">
                    <b>Developer</b>
                    <span>${game.developer}</span>
                </div>

                <div class="meta-item">
                    <b>Release Date</b>
                    <span>${game.release_date}</span>
                </div>
            </div>

            <a href="${game.game_url}" class="btn" target="_blank">Play Now</a>
        </div>
    </div>
    `;
}

ShowData();