export function rand(min, max){
    return Math.floor(Math.random() * max) + min;
}

function footerContent(){
    const element = document.querySelector("#main-interface");
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
            <p>Copyright © <a href="https://jgss-gabriel-sousa.github.io/"><span class="animated-link">Gabriel Sousa</span></a></p>
            <a class="py-3" href="/index.html"><img class="icon" src="/logo.png" style="width:42px;height:42px;"></a>
        </div>
    `;
    element.appendChild(footer);
}footerContent();