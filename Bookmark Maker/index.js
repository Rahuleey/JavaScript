// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let form = document.getElementById("bookmarkForm");
let nameInput = document.getElementById("siteNameInput");
let urlInput = document.getElementById("siteUrlInput");

let btn = document.getElementById("submitBtn");
let nameErr = document.getElementById("siteNameErrMsg");
let urlErr = document.getElementById("siteUrlErrMsg");

let bookmark = document.getElementById("bookmarksList");


function createValues() {
    let siteName = nameInput.value;
    let siteUrl = urlInput.value;
    let list = document.createElement("li");
    bookmark.appendChild(list);

    let title = document.createElement("p");
    title.textContent = siteName;
    title.style.fontWeight = "bold";
    title.style.color = "black";
    list.appendChild(title);

    let link = document.createElement("a");
    link.href = siteUrl;
    link.textContent = siteUrl;
    link.style.fontWeight = "600";
    link.style.marginBottom = "10px";
    link.setAttribute("target", "_blank");
    bookmark.classList.toggle("d-none");
    list.appendChild(link);
}

nameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";
    }
});

urlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErr.textContent = "Required*";
    } else {
        urlErr.textContent = "";
    }
});


form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameInput.value !== "" && urlInput.value !== "") {
        bookmark.classList.add("bookmark-cont");
        createValues();
    }
});
