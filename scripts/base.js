import { accentsTidy } from "./funcs.js"

function initFavicon(){
    const favicon = document.createElement("link");
    favicon.href = "https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/favicon.ico";
    favicon.type = "image/x-icon";
    favicon.rel = "shortcut icon";
    document.getElementsByTagName("head")[0].appendChild(favicon);
}initFavicon();

function setKeywordLinks(){
    function stringParser(str){
        //lowercase string, rmv accents and set "-" in all blank spaces
        return accentsTidy(str).replace(/\s/g, "-");
    }

    const keys = document.querySelectorAll(".kw");
    
    for(let i = 0; i < keys.length; i++) {
        const link = stringParser(keys[i].innerHTML);
        const text = keys[i].innerHTML;

        keys[i].innerHTML = `<a onclick="scrollToID('${link}')">${text}</a>`
    }
}setKeywordLinks();

function footerContent(){
    const element = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div>
            <ul class="wrapper">
                <a href="mailto:jgss.gabriel.sousa@gmail.com" target="_blank"><li class="icon email">
                    <span class="tooltip">E-mail</span>
                    <span><i class="fab fa-at"></i></span>
                </li></a>
                <a href="https://github.com/jgss-gabriel-sousa" target="_blank"><li class="icon github">
                    <span class="tooltip">GitHub</span>
                    <span><i class="fab fa-github"></i></span>
                </li></a>
                <a href="https://www.linkedin.com/in/jgss-gabriel-sousa/" target="_blank"><li class="icon linkedin">
                    <span class="tooltip">LinkedIn</span>
                    <span><i class="fab fa-linkedin"></i></span>
                </li></a>
                <a href="https://www.instagram.com/gabriel__sousa._/" target="_blank"><li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><i class="fab fa-instagram"></i></span>
                </li></a>
            </ul>
        </div>
        <div id="contact">
            <p>Copyright © <a href="https://jgss-gabriel-sousa.github.io/"><span>Gabriel Sousa</span></a></p>
            <a class="py-3" href="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/index.html"><img class="icon" src="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/logo.webp" style="width:42px;height:42px;"></a>
        </div>
    `;
    element.appendChild(footer);
}footerContent();

function headerGoHome(){
    let goHome = `
        <a class="py-3" href="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/index.html"><img class="icon" src="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/logo.webp" style="width:42px;height:42px;"></a>
    `;

    document.querySelector("header").innerHTML = goHome + document.querySelector("header").innerHTML;
}headerGoHome();

function setPageTheme(){
    const PageThemeToggleBtn = document.querySelector("#dark-mode i");
    const storedTheme = localStorage.getItem("HnM_theme");

    function applyDarkTheme(){
        document.querySelector("body").classList.add("dark-mode");
        document.querySelector("body").style.backgroundColor = "var(--bg-body-dark)";
        document.querySelector(":root").style.backgroundColor = "var(--bg-body-dark)";
 
        PageThemeToggleBtn.classList.add("fa-toggle-off");
    }

    function applyLightTheme(){
        document.querySelector("body").style.backgroundColor = "var(--bg-body-light)";
        document.querySelector(":root").style.backgroundColor = "var(--bg-body-light)";
        
        PageThemeToggleBtn.classList.add("fa-toggle-on");
    }

    if(storedTheme == "dark")       applyDarkTheme();
    else if(storedTheme == "light") applyLightTheme();
    else{
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
        systemTheme ? applyLightTheme() : applyDarkTheme();
    }
}setPageTheme();

/*
let selected = false;
function selectText(node){
    if(selected){
        selected = false;
        window.getSelection().removeAllRanges();
        return;
    }else
        selected = true;

    if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
    } else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        console.warn("Could not select text in node: Unsupported browser.");
    }
}
*/