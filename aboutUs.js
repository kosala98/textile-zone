const readMoreButton = document.getElementById("readMoreButton");
const hiddenText = document.getElementById("hiddenText");

readMoreButton.addEventListener("click", function() {
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        hiddenText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});
