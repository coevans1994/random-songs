const artists = [
    {
        "id": 581829,
        "name": "Elton John & Stevie Nicks"
    }, 
    {
        "id": 9763,
        "name": "Stevie Nicks"
    }, 
    {
        "id": 114625,
        "name": "Stevie Nicks & Kenny Loggins"
    },
 ];
 
 // Method 1: simple loops
function renderArtists(nameList) {
    let result = "<ul>";
    for (let item of nameList) {
        result += 
            `<li>
                ${item.name} 
                <button data-id=:${item.id}"> Get Quote</button>
            </li>`;
    }
    result += "</ul";

    document.querySelector(".js-artists").innerHTML = result;
}

renderArtists(artists);

function jsArtistsContainerClicked(event) {
   alert("clicked");
}

document 
    .querySelector(".js-artists")
    .addEventListener("click", jsArtistsContainerClicked);

function jsArtistsContainerClicked(event) {
    console.log('event.target: ', event.target.tagName);


    if (event.target.tagName === "BUTTON") {
        alert (event.target.dataset.id);
    }
}

