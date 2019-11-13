import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../modelo/item';

@Injectable({
  providedIn: 'root'
})
export class ItmRepoService {

  listadoItems:Item[] = [] 
  constructor(private _httpClient:HttpClient) { }

  agregar(nuevoItem:Item){
    return this._httpClient.post('http://localhost:3000/items',nuevoItem);
  }

  borrar(itemId:number){
    return this._httpClient.delete(`http://localhost:3000/items/${itemId}`)
  }


  getAll(){
    this._httpClient.get<Item[]>('http://localhost:3000/items')
    .subscribe(
      (data) => this.listadoItems=data
    );
  }

  getById(itemId:number){
    return this._httpClient.get<Item>(`http://localhost:3000/items/${itemId}`)
    
  }


}
