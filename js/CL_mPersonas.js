export default class CL_Personas {
    constructor (){
        this.contMj = 0;
        this.contHm = 0;
        this.contPr = 0;
    }
    procesarPersonas (per){
        this.contPr++;
        if(per.sexo == 'M')
            this.contHm++;
        else
        if(per.sexo == 'F')
            this.contMj++;
    }
    contadordepersonas (){
        return this.contPr
    }
    contadordehombres (){
        return this.contHm
    }
    contadordemujers   (){
        return this.contMj
    }
    
}