import { szenvedoMondatok } from "./angol.js";
import Kerdes from "./Kerdes.js";

export default class Kerdesek{
    #szElem;
    #kerdesek;
    #alcimSzElem;



    constructor(szElem,alcimSzElem){
        this.#szElem = szElem;
        this.#kerdesek = szenvedoMondatok;
        this.#alcimSzElem = alcimSzElem;
        this.alcimMegjelenit();
        this.keveres()
        this.megjelenit();
        this.ellenorzes();

    }

    alcimMegjelenit(){
        let html;
        html = this.#kerdesek[0]
        html += "<br><br>"
        html += this.#kerdesek[1]
        html += "<br><br>"

        
        this.#alcimSzElem.insertAdjacentHTML("beforeend",html)
    }


    keveres(){
       
        this.#kerdesek.splice(0,2)
        
        
        
        for (let index = 0; index < 3; index++) {
            let csere1 = Math.floor(Math.random() * this.#kerdesek.length);
            let csere2 = Math.floor(Math.random() * this.#kerdesek.length);
            let y = this.#kerdesek[csere1];
            this.#kerdesek[csere1] = this.#kerdesek[csere2];
            this.#kerdesek[csere2] = y;
            
        }
        
        
    }


    megjelenit(){
        let szamlalo = 0;
        for (let index = 0; index < this.#kerdesek.length; index++) {
            
            if (szamlalo == 0) {
                new Kerdes(this.#szElem,index,this.#kerdesek[index],true)
                szamlalo += 1;
            } else {
                new Kerdes(this.#szElem,index,this.#kerdesek[index],false)
                szamlalo = 0;
            }
            
            
            
        }
    }

    ellenorzes(){
        for (let index = 0; index < this.#kerdesek.length; index++) {
            document.getElementById(`${index}`).addEventListener("input",(e) =>{
                
                if(e.target.value === this.#kerdesek[index].valasztas[0]){
                    document.querySelector(`.a${index}`).insertAdjacentHTML("beforeend","<span style='color: green;'>✔</span>")
                    console.log("helyes")
                }
            })
            
        }



    }

















    
}