let inputEl = document.getElementById("searchInput");
let result = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

let searchVal = "";
let countries = [];

function createSearch(country) {
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    result.appendChild(countryEl);

    let img = document.createElement("img");
    img.src = country.flag;
    img.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(img);

    let content = document.createElement("div");
    content.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(content);

    let name = document.createElement("p");
    name.textContent = country.name;
    name.classList.add("countr-name");
    content.appendChild(name);

    let population = document.createElement("p");
    population.textContent = country.population;
    population.classList.add("country-population");
    content.appendChild(population);
}


function displaySearch() {
    result.textContent = "";
    for (let country of countries) {
        let countryName = country.name;
        if (countryName.toLowerCase().includes(searchVal.toLowerCase())) {
            createSearch(country);
        }
    }
}



function getCountries() {
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method: "GET",
    };

    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            countries = jsonData;
            displaySearch();
        })
}


function changeSearch(event) {
    searchVal = event.target.value;
    displaySearch();
}

getCountries();
inputEl.addEventListener("keyup", changeSearch);
