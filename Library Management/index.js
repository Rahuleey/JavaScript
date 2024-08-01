let defuserEl = document.getElementById("defuser");
let timeEl = document.getElementById("timer");
let count = 10;

let timeReduce = setInterval(function() {
    count -= 1;
    timeEl.textContent = count;
    if (count === 0) {
        timeEl.textContent = "BOOM";
        clearInterval(timeReduce);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let userText = defuserEl.value;
    if (event.key === "Enter" && userText === "defuse" && count !== 0) {
        timeEl.textContent = "You did it!";
        clearInterval(timeReduce);
    }
});