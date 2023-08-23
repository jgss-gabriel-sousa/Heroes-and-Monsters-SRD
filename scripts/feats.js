import { accentsTidy } from "./funcs.js"

import { basic_feats } from "../data/feats/basic-feats.js"
import { heroic_feats } from "../data/feats/heroic-feats.js"
import { epic_feats } from "../data/feats/epic-feats.js"

function fillTables(){
    const baseHTML = `
        <tbody>
            <tr>
                <th></th>
                <th>Descrição</th>
                <th>Pré-requisitos</th>
            </tr>`;

    if(document.querySelector("#talentos-basicos") != null){
        let basicFeatshtml = baseHTML;
        
        for(let i = 0; i < basic_feats.length; i++){
            const element = basic_feats[i];

            basicFeatshtml += `
                <tr id=${accentsTidy(element[0]).replace(/\s/g, "-")}>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><ul>`;
            
            for(let y = 0; y < element[2].length; y++){
                const e = element[2][y];
                
                if(e == "") continue;

                basicFeatshtml += `
                    <li>${e}</li>`;
            }  
        }
        basicFeatshtml += `
                </ul></td>
            </tr>
        </tbody>`;
                    
        document.querySelector("#talentos-basicos table").innerHTML = basicFeatshtml;
    }

    
    if(document.querySelector("#talentos-heroicos") != null){
        let heroicFeatshtml = baseHTML;
        
        for(let i = 0; i < heroic_feats.length; i++){
            const element = heroic_feats[i];

            heroicFeatshtml += `
                <tr id=${accentsTidy(element[0]).replace(/\s/g, "-")}>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><ul>`;
            
            for(let y = 0; y < element[2].length; y++){
                const e = element[2][y];
                
                if(e == "") continue;

                heroicFeatshtml += `
                    <li>${e}</li>`;
            }  
        }
        heroicFeatshtml += `
                </ul></td>
            </tr>
        </tbody>`;
                    
        document.querySelector("#talentos-heroicos table").innerHTML = heroicFeatshtml;
    }

    
    if(document.querySelector("#talentos-epicos") != null){
        let epicFeatshtml = baseHTML;
        
        for(let i = 0; i < epic_feats.length; i++){
            const element = epic_feats[i];

            epicFeatshtml += `
                <tr id=${accentsTidy(element[0]).replace(/\s/g, "-")}>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><ul>`;
            
            for(let y = 0; y < element[2].length; y++){
                const e = element[2][y];
                
                if(e == "") continue;

                epicFeatshtml += `
                    <li>${e}</li>`;
            }  
        }
        epicFeatshtml += `
                </ul></td>
            </tr>
        </tbody>`;
                    
        document.querySelector("#talentos-epicos table").innerHTML = epicFeatshtml;
    }
}fillTables();