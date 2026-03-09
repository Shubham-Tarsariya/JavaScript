// Fetch Apis Using Fetch method

// fetch API is used to make network requests and handle responsesin JavaScript. It provides a modern and flexible way to interact with APIs and retrieve data from servers. The Fetch API is built on top of Promises, which allows for easier handling of asynchronous operations.

// HTTP Basics: HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. IIt defines how messages are formatted and transmitted between clients (like browsers) and servers. HTTP uses methods like GET, POST, PUT, DELETE, etc., to perform different actions on resources. Understanding HTTP basics is crucial for working with APIs and making network requests effectively.

// fetch --> then -> then --> catch
function userData(){
    fetch("https://randomuser.me/api/?results=100")
    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json()
    })
    .then((data) => {
        console.log(data);
        console.log(data.results);
        let div = document.querySelector(".card");
        data.results.forEach(user => {
            div.innerHTML += `
                <div class="left">
                    <img src="${user.picture.large}" alt="profile">
                    <div class="vertical">IDENTITY CARD</div>
                </div>
                
                <div class="right">

                    <div class="location">${user.location.city}, ${user.location.state}, ${user.location.country}</div>

                    <div class="name">${user.name.first}${user.name.last}</div>

                    <div class="label">ELECTRONIC MAIL</div>
                    <div class="info">${user.email}</div>

                    <div class="label">DIRECT LINE</div>
                    <div class="info">${user.phone}</div>

                    <div class="buttons">
                        <button class="contact">CONTACT</button>
                        <button class="share">🔗</button>
                    </div> `
        });
    })
    .catch((err) => {
        console.log(err);
    })
}
userData();