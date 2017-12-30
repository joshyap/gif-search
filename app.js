var api_key = '5m3viGHkMUDCOpYO0ZynREhgR7rCapGo';

function searchGif() {
    var result = document.getElementById("searchText").value;
    alert('Search term: ' + result);
}

document.getElementById("searchButton").onclick = searchGif;