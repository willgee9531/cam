const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
let productCards = document.querySelectorAll(".product-card");
const noResultsMessage = document.getElementById('no-results-message');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLocaleLowerCase().trim();
    let hasVisibleProduct = false;

    for (let i = 0; i < productCards.length; i++) {
        const productName = productCards[i].querySelector("h3").textContent.toLocaleLowerCase();

        if (productName.includes(searchText)) {
            productCards[i].style.display = "flex";
            hasVisibleProduct = true;
        } else {
            productCards[i].style.display = "none";
        }
    }

    if (hasVisibleProduct) {
        noResultsMessage.style.display = 'none';
    } else {
        noResultsMessage.style.display = 'block';
    }
});