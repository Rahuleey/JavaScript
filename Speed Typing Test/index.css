let mainEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
let counter = 0;

spinnerEl.classList.toggle("d-none");

function startCounter() {
    counter += 1;
    timerEl.textContent = counter;
}
let counterVal = setInterval(startCounter, 1000);

function getQuote() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
        });
}
getQuote();
startCounter();


resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    counter = 0;
    getQuote();
    startCounter();
    resultEl.textContent = "";
    quoteInputEl.textContent = "";
}

submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterVal);
        resultEl.textContent = "You typed in " + counter + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}
