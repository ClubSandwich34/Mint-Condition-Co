// JavaScript source code

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchBar");
    const autocompleteList = document.getElementById("autocomplete-list");

    const inventory = getInventory();

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        autocompleteList.innerHTML = "";

        if (!query) return;

        Object.keys(inventory).forEach(name => {
            if (name.toLowerCase().startsWith(query)) {
                const li = document.createElement("li");
                li.textContent = name;
                li.addEventListener("click", () => {
                    window.location.href = `search-results.html?q=${encodeURIComponent(name)}`;
                });
                autocompleteList.appendChild(li);
            }
        });
    });

    // Handle Enter key to show all matches
    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query.length > 0) {
                window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });

    // Dismiss dropdown on outside click
    document.addEventListener("click", e => {
        if (!searchInput.contains(e.target)) {
            autocompleteList.innerHTML = "";
        }
    });
});
