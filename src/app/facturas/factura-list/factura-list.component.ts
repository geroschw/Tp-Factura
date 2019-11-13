import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FacturaRepoService } from '../factura-repo.service';
import { Factura } from 'src/app/modelo/factura';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  constructor(private _FactRepoService:FacturaRepoService) { }
  @Output() facturaEditado:EventEmitter<number> = new EventEmitter();
factura:Factura = new Factura(0, "", "", 0, 0, 0, 0,[]);
  ngOnInit() {
    this._FactRepoService.getAll();
  }

  obtenerFactura(facturaId: number) {
    this._FactRepoService.getById(facturaId)
      .subscribe(
        (factura) => this.factura =factura
      )
  }
  borrarFactura(facturaId: number) {
    this._FactRepoService.borrar(facturaId)
      .subscribe(
        (response) => console.log('Se borro la factura', response)
      )
  }
  
}
