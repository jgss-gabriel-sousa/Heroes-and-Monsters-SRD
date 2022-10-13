function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("mySidepanel").style.height = "max-content";
    document.getElementById("mySidepanel").style.borderWidth = "1px";
    document.getElementById("main-interface").style.marginLeft = "300px";
    document.querySelector("#openSidepanel").style.display = "none";
}

function closeNav() {
    document.querySelector("#openSidepanel").style.display = "inline-block";
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.height = "0";
    document.getElementById("mySidepanel").style.borderWidth = "0px";
    document.getElementById("main-interface").style.marginLeft = "0";
}

function scrollToID(id){
    const elementHeight = document.getElementById(id).getBoundingClientRect().height;

    document.getElementById(id).scrollIntoView({
        behavior: "smooth", 
        block: "center",
        inline: "end"
    });

    window.history.pushState({page: "another"}, id, document.location.origin+document.location.pathname+"#"+id);

    console.log(elementHeight)
    if(elementHeight < 200){

        document.getElementById(id).classList.add("highlighted");
        setTimeout(()=>{document.getElementById(id).classList.remove("highlighted")}, 2500)
    }
    /*
*/
}

function darkMode(){
    if(document.querySelector("body").classList.contains("dark-mode")){
        document.querySelector("body").classList.remove("dark-mode");
        document.querySelector("body").style.backgroundColor = "var(--bg-body-light)";
        document.querySelector("#dark-mode i").classList.remove("fa-toggle-off");
        document.querySelector("#dark-mode i").classList.add("fa-toggle-on");
        localStorage.setItem("HnM_theme", "light");
        document.querySelector("body").style.transition = "4s";
    }
    else{
        document.querySelector("body").classList.add("dark-mode");
        document.querySelector("body").style.backgroundColor = "var(--bg-body-dark)";
        document.querySelector("#dark-mode i").classList.add("fa-toggle-off");
        document.querySelector("#dark-mode i").classList.remove("fa-toggle-on");
        localStorage.setItem("HnM_theme", "dark");
        document.querySelector("body").style.transition = "4s";
    }
}