menu.onclick = function shortMenu() {
    var x = document.getElementById("menuTopnav");

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}