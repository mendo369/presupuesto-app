import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso('Servicios públicos', 300000)
    ]

    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);//.splice(objeto a eliminar | cantidad de objetos a eliminar)
    }
}