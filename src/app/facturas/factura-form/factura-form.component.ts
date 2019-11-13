import { Component, OnInit } from '@angular/core';
import { FacturaRepoService } from '../factura-repo.service';
import { Factura } from 'src/app/modelo/factura';
import { ActivatedRoute } from '@angular/router';
import { CliRepoService } from 'src/app/clientes/cli-repo.service';
import { Cliente } from 'src/app/modelo/cliente';
import { ProdRepoService } from 'src/app/productos/prod-repo.service';
import { Producto } from 'src/app/modelo/producto';
import { Item } from 'src/app/modelo/item';
import { ItmRepoService } from 'src/app/items/itm-repo.service';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {

  listadoFact: [] = []
  factura: Factura = new Factura(0, "", "", 0, 0, 0, 0, []);
  cliente: Cliente = new Cliente(0, "", "", "");
  producto: Producto = new Producto(0, "", "", 0);
  edicion = false
  listaItems: Item[] = []
  itemseleccionado: Item;
  item: Item;
  cant = 1;
  iva = 21;
  subt: number;
  total = 0;

  constructor(private _facturaRepoService: FacturaRepoService, private activatedRoute: ActivatedRoute,
    private _cliFactRepoService: CliRepoService, private _productoRepoService: ProdRepoService, private _itemRepoService: ItmRepoService) {
    // console.log(activatedRoute.snapshot.paramMap.get("facturaid"))
    this._cliFactRepoService.getAll();
    this._productoRepoService.getAll();

  }
  ngOnInit() {


    if (this.activatedRoute.snapshot.paramMap.get('id') != null) {
      this._facturaRepoService.getById(parseInt(this.activatedRoute.snapshot.paramMap.get('id')))
        .subscribe(x => {
          this.factura = x
          this.listaItems = x.ArrayItems
          this.total = x.total
        })
    
      this._cliFactRepoService.getById(parseInt(this.activatedRoute.snapshot.paramMap.get('idcli')))
        .subscribe(x => this.cliente = x)

      this.edicion = true;

      document.getElementById("btnEnviar").hidden=true
      document.getElementById("btnAgrItem").hidden=true

    }else
    {
      
    }


  }
  guardarFactura() {
    for (let i = 0; i < this.listaItems.length; i++) {
      this.factura.ArrayItems.push(this.listaItems[i]);
    }


    this._facturaRepoService.agregar(this.factura)
      .subscribe(
        () => console.log("Se creó la factura", Response)
      )
  }

  onChange() {
    this._cliFactRepoService.getById(this.factura.clienteId)
      .subscribe(x => this.cliente = x)
  }

  onChange2() {

    this._productoRepoService.getById(this.producto.id)
      .subscribe(x => this.producto = x)

  }

  agregarItem() {

    this.subt = parseFloat((((this.producto.precioU * (this.iva / 100)) + this.producto.precioU) * this.cant).toFixed(3))


    this.item = new Item(0, this.cant, this.producto.codigo, this.producto.descripcion, this.producto.precioU, this.iva, this.subt, this.producto.id)
    this.listaItems.push(this.item);
    this.total = this.total + this.item.subtotal;
    this.factura.total = this.total;

  }

  deleteRow(item) {
    for (let i = 0; i < this.listaItems.length; i++) {
      if (this.listaItems[i] === item) {
        this.total = parseFloat((this.total - item.subtotal).toFixed(3))
        this.listaItems.splice(i, 1);
      }
    }
  }

  obtenerItem(itms: number) {
    this._itemRepoService.getById(itms)
      .subscribe(x => this.itemseleccionado = x)
    console.log(itms)
  }
  borrarItem(itemid: number) {


  }

}

