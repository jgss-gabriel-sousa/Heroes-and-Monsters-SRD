import { rand, selectText } from "./scripts/funcs.js"

document.querySelector(".name-gen button").addEventListener("click", nameGen);
document.querySelector("#talentos-raciais table").addEventListener("click", (event) => {
    navigator.clipboard.writeText(event.target.innerText);
    selectText(event.target);
});
document.querySelector("#nameGenerated").addEventListener("click", (event) => {
    navigator.clipboard.writeText(event.target.innerText);
    selectText(event.target);
    console.log(event.target);
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

    let name;

    let hasGenderNames = true;
    let hasSurnames = true;

    if(!document.getElementById("m-names"))     hasGenderNames = false;
    if(!document.getElementById("surnames"))    hasSurnames = false;

    if(hasGenderNames){
        const maleOrFemale = rand(0,2);
        let firstName;
        let surname;

        if(hasSurnames){
            surname = nameParser(document.getElementById("surnames").innerText);
            surname = surname[rand(0,surname.length)];
        }
        
        if(maleOrFemale == 0){
            document.getElementById("nameGenerated").innerHTML = '(Masculino) <span id="nameGenValue"></span>';
            const names = nameParser(document.getElementById("m-names").innerText);
            firstName = names[rand(0,names.length)];
        }
        else{
            document.getElementById("nameGenerated").innerHTML = '(Feminino) <span id="nameGenValue"></span>';
            const names = nameParser(document.getElementById("f-names").innerText);
            firstName = names[rand(0,names.length)];
        }

        if(hasSurnames)
            name = firstName+" "+surname;
        else
            name = firstName;
    }
    else if(!hasGenderNames && !hasSurnames){
        name = nameParser(document.getElementById("names").innerText);
        name = name[rand(0,name.length)];
    }

    if(name == document.querySelector("#nameGenValue").innerText && name != "")
        nameGen();

    document.getElementById("nameGenValue").innerText = name;
}