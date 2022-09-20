import { rand } from "/scripts/funcs.js"

document.querySelector(".name-gen button").addEventListener("click", nameGen);
document.querySelector("#talentos").addEventListener("click", (event) => {
    navigator.clipboard.writeText(event.target.innerText);
});

function nameGen(){  
    function nameParser(string){
        let result = string.split(`"`)
        .map((part, i) => i % 2 ?
        part :
        part.split(" ").join("")
        ).join(`"`);

        return result.split(',');
    }

    const maleOrFemale = rand(0,2);
    let firstName;
    let surname = nameParser(document.getElementById("surnames").innerText);
    surname = surname[rand(0,surname.length)];
    
    if(maleOrFemale == 0){
        const names = nameParser(document.getElementById("m-names").innerText);
        firstName = "(Masculino) "+names[rand(0,names.length)];
    }
    else{
        const names = nameParser(document.getElementById("m-names").innerText);
        firstName = "(Feminino) "+names[rand(0,names.length)];
    }

    document.getElementById("nameGenerated").innerText = firstName+" "+surname;
}