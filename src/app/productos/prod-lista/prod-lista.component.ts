import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProdRepoService } from '../prod-repo.service';

@Component({
  selector: 'app-prod-lista',
  templateUrl: './prod-lista.component.html',
  styleUrls: ['./prod-lista.component.css']
})
export class ProdListaComponent implements OnInit {

  constructor(private _ProdRepoService:ProdRepoService) { }
  @Output() productoEditado:EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this._ProdRepoService.getAll();
  }

  obtenerProducto(productoId: number) {
    this._ProdRepoService.getById(productoId)
      .subscribe(
        (producto) => console.log(producto)
      )
  }
  borrarProducto(productoId: number) {
    this._ProdRepoService.borrar(productoId)
      .subscribe(
        (response) => console.log('Se borro el producto', response)
      )
  }
 

}
