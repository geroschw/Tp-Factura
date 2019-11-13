import { Injectable } from '@angular/core';
import { Factura } from '../modelo/factura';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacturaRepoService {

  listadoFacturas:Factura[] = [] 
  constructor(private _httpClient:HttpClient) { }

  agregar(nuevoItem:Factura){
    return this._httpClient.post('http://localhost:3000/facturas',nuevoItem);
  }

  borrar(itemId:number){
    return this._httpClient.delete(`http://localhost:3000/facturas/${itemId}`)
  }


   getAll(){
     this._httpClient.get<Factura[]>('http://localhost:3000/facturas')
     .subscribe(
       (data) => this.listadoFacturas=data
     );
   }

  getById(itemId:number){
    return this._httpClient.get<Factura>(`http://localhost:3000/facturas/${itemId}`)
    
  }
}
