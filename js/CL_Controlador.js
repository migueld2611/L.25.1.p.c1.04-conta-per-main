export default class CL_Controlador {
    constructor (modelo, vista) {
        this.modelo = modelo
        this.vista = vista
    }
    proceasarPersonas(){
        this.modelo.procesarPersona(this.vista.procesarPersona());
        this.vista.reporterPersonas(
        this.modelo.mostrarPersonas(this.modelo.contadordepersonas()),
        this.modelo.mostrarHombres(this.modelo.contadordehombres()),
        this.modelo.mostrarMujeres(this.modelo.contadordemujers())    
        );
    }
}
