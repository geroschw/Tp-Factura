import { Item } from './item';

export class Factura {
    id: number;
    tipo: string;
    fecha: string;
    numero: number;
    ptoVenta: number;
    clienteId: number;
    total: number;
    ArrayItems: Item[]=[];


    constructor(id:number, tipo:string, fecha:string, numero:number, ptoVenta:number, clienteId:number,
        total:number,Arr:Item[]){

            this.id = id;
            this.tipo = tipo;
            this.fecha=fecha;
            this.numero=numero;
            this.ptoVenta=ptoVenta;
            this.clienteId=clienteId;
            this.total=total;
            this.ArrayItems=Arr;
    }
}
