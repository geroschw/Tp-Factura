import { Component, OnInit } from '@angular/core';
import { ItmRepoService } from '../itm-repo.service';

@Component({
  selector: 'app-itm-list',
  templateUrl: './itm-list.component.html',
  styleUrls: ['./itm-list.component.css']
})
export class ItmListComponent implements OnInit {

  constructor(private _ItmRepoService:ItmRepoService) { }

  ngOnInit() {
    this._ItmRepoService.getAll();
  }

  obtenerItem(itemId: number) {
    this._ItmRepoService.getById(itemId)
      .subscribe(
        (item) => console.log(item)
      )
  }
  borrarItem(itemId: number) {
    this._ItmRepoService.borrar(itemId)
      .subscribe(
        (response) => console.log('Se borro el item', response)
      )
  }

}
