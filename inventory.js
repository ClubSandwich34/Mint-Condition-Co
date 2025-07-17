// Default stock (run once only)
const defaultInventory = {
    "Squirtle": 5,
    "Charmander": 3,
    "Bulbasaur": 4,
    "Wartortle": 2,
    "Charmeleon": 2,
    "Ivysaur": 2,
    "Blastoise EX": 1,
    "Charizard EX": 1,
    "Venusaur EX": 1,
    "Dome Fossil": 10,
    "Helix Fossil": 10,
    "Old Amber": 10,
    "Big Air Balloon": 6,
    "Bills Transfer": 5,
    "Cycling Road": 8,
    "Gift Energy": 12,
    "Regenerative Energy": 12,
    "V Guard Energy": 12,
    "Treasure Energy": 12,
    "Jet Energy": 12
};

if (!localStorage.getItem("inventory")) {
    localStorage.setItem("inventory", JSON.stringify(defaultInventory));
}

function getInventory() {
    return JSON.parse(localStorage.getItem("inventory"));
}

function updateInventory(name, change) {
    const inv = getInventory();
    if (inv[name] !== undefined) {
        inv[name] = Math.max(inv[name] + change, 0);
        localStorage.setItem("inventory", JSON.stringify(inv));
    }
}

function getStock(name) {
    const inv = getInventory();
    return inv[name] ?? 0;
}
