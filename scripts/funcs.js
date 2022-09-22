function openNewTab(url){
    window.open(url, '_blank').focus();
}

export function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

function footerContent(){
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <div class="container d-flex justify-content-center py-5 pb-3">
            <ul class="wrapper">
                <li class="icon email" onclick="openNewTab('mailto:jgss.gabriel.sousa@gmail.com')">
                    <span class="tooltip">E-mail</span>
                    <span><i class="fab fa-at"></i></span>
                </li>
                <li class="icon github" onclick="openNewTab('https://github.com/jgss-gabriel-sousa')">
                    <span class="tooltip">GitHub</span>
                    <span><i class="fab fa-github"></i></span>
                </li>
                <li class="icon linkedin" onclick="openNewTab('https://www.linkedin.com/in/jgss-gabriel-sousa/')">
                    <span class="tooltip">LinkedIn</span>
                    <span><i class="fab fa-linkedin"></i></span>
                </li>
                <li class="icon instagram" onclick="openNewTab('https://www.instagram.com/gabriel__sousa._/')">
                    <span class="tooltip">Instagram</span>
                    <span><i class="fab fa-instagram"></i></span>
                </li>
            </ul>
        </div>
        <div class="container d-flex flex-column align-items-center py-1 mb-5" id="contact">
            <p>Copyright © <a href="https://jgss-gabriel-sousa.github.io/"><span class="animated-link">Gabriel Sousa</span></a></p>
            <a class="py-3" href="/index.html"><img class="icon" src="/logo.png" style="width:42px;height:42px;"></a>
        </div>
    `;
    body.appendChild(footer);
}footerContent();