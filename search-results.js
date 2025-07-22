// JavaScript source code
// search-results.js

// Hardcoded image data (used alongside inventory.js stock)
function getImageMap() {
    return {
        "Squirtle": "images/squirtle.png",
        "Charmander": "images/charmander.png",
        "Bulbasaur": "images/bulbasaur.png",
        "Wartortle": "images/wartortle.png",
        "Charmeleon": "images/charmeleon.png",
        "Ivysaur": "images/ivysaur.png",
        "Blastoise EX": "images/blastoise.png",
        "Charizard EX": "images/charizard.png",
        "Venusaur EX": "images/venusaur.png",
        "Dome Fossil": "images/152.png",
        "Helix Fossil": "images/153.png",
        "Old Amber": "images/154.png",
        "Big Air Balloon": "images/155.png",
        "Bills Transfer": "images/156.png",
        "Cycling Road": "images/157.png",
        "Gift Energy": "images/167.jpg",
        "Regenerative Energy": "images/168.jpg",
        "V Guard Energy": "images/169.jpg",
        "Treasure Energy": "images/170.jpg",
        "Jet Energy": "images/171.jpg"
    };
}

// Gets the `q` parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
    const resultsContainer = document.getElementById("results");
    const query = getQueryParam("q")?.toLowerCase();

    const imageMap = getImageMap();
    const inventory = getInventory(); // from inventory.js

    if (!query) {
        resultsContainer.innerHTML = "<p>No search query provided.</p>";
        return;
    }

    const matches = Object.keys(inventory).filter(name =>
        name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        resultsContainer.innerHTML = "<p>No matching cards found.</p>";
        return;
    }

    matches.forEach(name => {
        const stock = inventory[name];
        const image = imageMap[name] || "images/default.png";

        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        cardDiv.innerHTML = `
            <img src="${image}" alt="${name}" class="pokemon-card-img">
            <h2 class="card-title title-font">${name}</h2>
            <p class="card-stock">Stock: ${stock}</p>
            <button class="purchase-btn">Purchase</button>
        `;

        resultsContainer.appendChild(cardDiv);
    });
});
