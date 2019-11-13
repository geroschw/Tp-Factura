import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProdRepoService } from '../prod-repo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {
  listadoProd:string[] = []
  producto:Producto = new Producto(0,"","",0);
  edicion:boolean=false;
  
  constructor(private _prodRepoService:ProdRepoService, private rutaActiva:ActivatedRoute) { 
    // console.log(activatedRoute.snapshot.paramMap.get("productoid"))
    
  }
  ngOnInit() {
    if (this.rutaActiva.snapshot.paramMap.get('id') != null) {
      this._prodRepoService.getById(parseInt(this.rutaActiva.snapshot.paramMap.get('id')))
        .subscribe(x => this.producto = x)
         this.edicion = true;
    }
  } 

  grabarProducto(){
    if(this.edicion){
      this._prodRepoService.actualizar(this.producto)
      .subscribe(
        (Response)=>console.log("Se modificó el producto", Response)
      )
    }else
    {
      this._prodRepoService.agregar(this.producto)
      .subscribe(
        ()=>console.log("Se creó el producto",Response)
      )
    }
  }

  editarProducto(productoId:number){
    this._prodRepoService.getById(productoId)
    .subscribe(
      (producto) => {this.producto = producto;
        this.edicion = true;
      }
    )
  }
}
