export function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

let selected = false;
export function selectText(node){
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

function accentsTidy(s){
    var r = s.toLowerCase();
    const non_asciis = {'a': '[àáâãäå]', 'ae': 'æ', 'c': 'ç', 'e': '[èéêë]', 'i': '[ìíîï]', 'n': 'ñ', 'o': '[òóôõö]', 'oe': 'œ', 'u': '[ùúûűü]', 'y': '[ýÿ]'};
    for (let i in non_asciis) { r = r.replace(new RegExp(non_asciis[i], 'g'), i); }
    return r;
}

function setKeywordLinks(){
    function stringParser(str){
        //lowercase string, rmv accents and set "-" in all blank spaces
        return accentsTidy(str.toLowerCase()).replace(/\s/g, "-");
    }

    const keys = document.querySelectorAll(".kw");
    
    for(let i = 0; i < keys.length; i++) {
        const link = stringParser(keys[i].innerHTML);
        const text = keys[i].innerHTML;

        keys[i].innerHTML = `<a href="#${link}">${text}</a>`
    }
}setKeywordLinks();

function footerContent(){
    const element = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="container d-flex justify-content-center py-5 pb-3">
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
        <div class="container d-flex flex-column align-items-center py-1 mb-5" id="contact">
            <p>Copyright © <a href="https://jgss-gabriel-sousa.github.io/"><span>Gabriel Sousa</span></a></p>
            <a class="py-3" href="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/index.html"><img class="icon" src="https://jgss-gabriel-sousa.github.io/Heroes-and-Monsters-SRD/logo.png" style="width:42px;height:42px;"></a>
        </div>
    `;
    element.appendChild(footer);
}footerContent();