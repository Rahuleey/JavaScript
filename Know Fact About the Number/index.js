let inputEl = document.getElementById("userInput");
let facts = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function getFact(event) {
    if (event.key === "Enter") {
        let userEl = inputEl.value;
        if (userEl === "") {
            alert("Enter a number");
            return
        }

        let url = "https://apis.ccbp.in/numbers-fact?number=" + userEl;
        let options = {
            method: "GET",
        };

        spinnerEl.classList.remove("d-none");
        facts.classList.add("d-none");

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                facts.classList.remove("d-none");
                spinnerEl.classList.add("d-none");
                let {
                    fact
                } = jsonData;
                facts.textContent = fact;
            });

    }
}
inputEl.addEventListener("keyup", getFact);
