export class Cliente {
    id: number;
    nombre: string[80];
    direccion: string[120];
    cuit: string[15];

    constructor(id:number, nombre:string[80], direccion:string[120], cuit:string[15]){
        this.id=id;
        this.nombre=nombre;
        this.direccion=direccion;
        this.cuit=cuit;
    }
}
