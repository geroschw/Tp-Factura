import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/modelo/item';
import { ItmRepoService } from '../itm-repo.service';

@Component({
  selector: 'app-itm-form',
  templateUrl: './itm-form.component.html',
  styleUrls: ['./itm-form.component.css']
})
export class ItmFormComponent implements OnInit {

  item:Item = new Item(0,22,"codigo","desc",35.6,21,445.25,3);
  constructor(private _itmRepoService:ItmRepoService) { 
    
  }

  ngOnInit() {
  }

  grabarItem(){
    
      this._itmRepoService.agregar(this.item)
      .subscribe(
        ()=>console.log("Se creó el cliente",Response)
      )
    
  }
}
