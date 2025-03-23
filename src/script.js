document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const closeIcon = document.getElementById("close-icon");
    const searchInput = document.getElementById("search-input");

    // Jab Search icon click hoga to ye hoga
    searchIcon.addEventListener("click", function () {
        searchInput.classList.add("active");
        searchIcon.style.display = "none";
        closeIcon.style.display = "inline-block";
    });

    // Jab Cross icon click hoga to ye hoga
    closeIcon.addEventListener("click", function () {
        searchInput.classList.remove("active");
        searchIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
    });
});
