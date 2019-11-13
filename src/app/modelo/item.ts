
export class Item {
    id: number;
    cantidad: number;
    codigo: string[50];
    descripcion: string[300];
    precioU: number;
    iva: number;  
    subtotal: number;
    productoId: number; 
    facturaId:number;

    constructor(id:number, cantidad:number, codigo:string[50], descripcion:string[300], precioU:number,
        iva:number, subtotal:number, productoId: number){

            this.id = id;
            this.cantidad = cantidad;
            this.codigo = codigo;
            this.descripcion = descripcion;
            this.precioU = precioU;
            this.iva = iva;
            this.subtotal = subtotal;
            this.productoId = productoId;
    }
}
