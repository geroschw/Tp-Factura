export class Producto {
    id: number;
    codigo: string[50];
    descripcion: string[300];
    precioU: number;

    constructor(id: number, codigo:string[50], descripcion:string[300], precioU:number) {
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioU = precioU;
    }
}
