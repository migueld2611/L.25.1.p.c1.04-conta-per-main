/**CONTADOR DE PERSONAS 
Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo; la salida requerida presenta el siguiente formato: 
Cantidad de personas: 12 
Cantidad de hombres: 5 
Cantidad de mujeres: 7  */

import CL_vPresonas from "./CL_vPresonas.js";
import CL_mPersonas from "./CL_mPersonas.js";
import CL_Controlador from "./CL_Controlador.js";
export default class Cl_principal {
    constructor() {
        let vista = new CL_vPresonas();
        let modelo = new CL_mPersonas();
        let controlador = new CL_Controlador(modelo, vista);
        vista.controlador = controlador; 
    }   
}               
      
