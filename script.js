function searchEcosia() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm === ""){
        window.location.href="https://ecosia.org/chat"
    } else {
        window.location.href = "https://www.ecosia.org/search?q=" + encodeURIComponent(searchTerm);
    }
    return false; // Prevent default form submission
}
document.addEventListener('DOMContentLoaded', function() {
 const form = document.getElementById('searchForm');
 form.addEventListener('submit', function(event) {
    event.preventDefault();
    searchEcosia()
 });
});
