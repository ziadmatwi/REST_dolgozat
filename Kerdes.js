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
        
        

        
    }


    

    megjelenit(){
        let mondat = this.#obj.mondat.split("_")
        let html = "";
        
        
        html += `
        <div class="col-md-6 border border-secondary rounded p-4 class="a${this.#index}" ><span>${mondat[0]}</span><input id="${this.#index}" type="text"><span>${mondat[1]} (${this.#obj.alap})</span></div>
         `
      
        this.#szElem.insertAdjacentHTML("beforeend",html)
    }


    















}