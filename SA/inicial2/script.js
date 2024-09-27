document.getElementById("central-button").addEventListener("click", function () {
    var extraButtons = document.getElementById("extra-buttons");
    if (extraButtons.style.display === "none") {
        extraButtons.style.display = "block";
    } else {
        extraButtons.style.display = "none";
    }
});
