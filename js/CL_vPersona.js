export default class CL_vPersona {
    constructor () {
        this.innombre = document.getElementById('personasFrom_innombre');
        this.insexo = document.getElementById('personasFrom_insexo');
        this.btProcesar = document.getElementById('personasFrom_btProcesar');

    }
     get nombre (){
        return this.innombre.value
    }
    get sexo (){
        return this.insexo.value
        
    }
}