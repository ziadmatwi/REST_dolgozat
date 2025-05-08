export default class Kerdes{

    #szElem;
    #index;
    #obj;
    #helyes;
    #sor;

    constructor(szElem,index,obj,sor){
        this.#szElem = szElem
        this.#index = index
        this.#obj = obj
        this.#helyes = obj.valasztas[0]
        
        this.#sor = sor;
        this.megjelenit()
        console.log(this.#sor)
        

        
    }


    

    megjelenit(){
        let mondat = this.#obj.mondat.split("_")
        let html = "";
        console.log(this.#sor);
       
        html += `
        <div class="col-md-6 border border-secondary rounded p-2 "><span>${mondat[0]}</span><input type="text"><span>${mondat[1]} (${this.#obj.alap})</span></div>
        `
      
        this.#szElem.insertAdjacentHTML("beforeend",html)
    }















}