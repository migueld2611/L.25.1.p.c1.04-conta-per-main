import CL_vPersona from "./CL_vPersona.js";
import CL_mPersona from "./CL_mPersona.js";
export default class CL_vPersonas {
    constructor() {
        this.controlador = null
        this.salida = document.getElementById('mainForm_salida');
        this.vPersonas = new CL_vPersonas();
        this.vPersonas.btProcesar.onclick= () => this.controlador.procesarPersonas();

        
        
    }
    procesarPersonas(){ 
        this.mPersona = new CL_mPersona({
            nombre: this.vPersonas.nombre,
            sexo: this.vPersonas.sexo
        });
         
return this.mPersona;
    }
    reportarPersonas(contPr, contHm, contMj){
        this.salida.innerHTML = `Cantidad de personas: ${contPr}<br>
        Cantidad de hombres: ${contHm}<br>
        Cantidad de mujeres: ${contMj}`
    }
}


























