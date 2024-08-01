let searchInp = document.getElementById("searchInput");
let searchRes = document.getElementById("searchResults");
let messageEl = document.getElementById("message");
let spinnerEl = document.getElementById("spinner");

let headEl = document.createElement("h1");

function createSearch(search_results) {
    if (searchInp.value.length < 1) {
        messageEl.textContent = "No results found";
        messageEl.classList.add("sub-head");
        searchRes.textContent = "";
        headEl.textContent = "";
    } else {
        messageEl.textContent = "";
        headEl.textContent = "Popular Books";
        headEl.classList.add("sub-head");
        searchRes.appendChild(headEl);
        for (let item of search_results) {
            let title = item.title;
            let img = item.imageLink;
            console.log(item.title);
            let author = item.author;
            let cont = document.createElement("div");
            cont.classList.add("col-6");
            let imgEl = document.createElement("img");
            let textEl = document.createElement("p");
            imgEl.setAttribute("src", img);
            imgEl.classList.add("book-img");
            textEl.textContent = author;
            cont.appendChild(imgEl);
            cont.appendChild(textEl);
            searchRes.appendChild(cont);
        }
    }
}

searchInp.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        let val = searchInp.value;
        let url = "https://apis.ccbp.in/book-store?title=" + val;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                console.log(jsonData)
                createSearch(search_results);
                spinnerEl.classList.toggle("d-none");
            });
    }
})
