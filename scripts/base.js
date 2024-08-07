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
            <p>Copyright © <a href="https://jgss-gabriel-sousa.github.io/"><span>Gabriel Sousa</span></a></p>
            <a class="py-3" href="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/index.html"><img class="icon" src="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/logo.webp" style="width:42px;height:42px;"></a>
        </div>
    `;
    element.appendChild(footer);
}footerContent();

function headerGoHome(){
    
    function transformToIndexUrl(url) {
        let urlObj = new URL(url);
      
        urlObj.pathname = '/index.html';

        return urlObj.toString();
    }

    let goHome = `
        <a class="py-3" href="${transformToIndexUrl(window.location.href)}"><img class="icon" src="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/logo.webp" style="width:42px;height:42px;"></a>
    `;

    document.querySelector("header").innerHTML = goHome + document.querySelector("header").innerHTML;
}headerGoHome();

function setPageTheme(){
    const PageThemeToggleBtn = document.querySelector("#dark-mode i");
    const storedTheme = localStorage.getItem("HnM_theme");

    function applyDarkTheme(){
        document.querySelector("body").classList.add("dark-mode");
 
        if(PageThemeToggleBtn)
            PageThemeToggleBtn.classList.add("fa-toggle-off");
    }

    function applyLightTheme(){        
        if(PageThemeToggleBtn)
            PageThemeToggleBtn.classList.add("fa-toggle-on");
    }

    if(storedTheme == "dark")       applyDarkTheme();
    else if(storedTheme == "light") applyLightTheme();
    else{
        const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
        systemTheme ? applyLightTheme() : applyDarkTheme();
    }
}setPageTheme();
