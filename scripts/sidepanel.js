function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("mySidepanel").style.height = "max-content";
    document.querySelector(".openbtn").style.display = "none";
}

function closeNav() {
    document.querySelector(".openbtn").style.display = "inline-block";
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.height = "0";
}