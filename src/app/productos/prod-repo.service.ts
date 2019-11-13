import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProdRepoService {

  listadoProductos:Producto[] = [] 
  constructor(private _httpClient:HttpClient) { }

  agregar(nuevoProducto:Producto){
    return this._httpClient.post('http://localhost:3000/productos',nuevoProducto);
  }

  actualizar(producto:Producto){
    return this._httpClient.put(`http://localhost:3000/productos/${producto.id}`,producto);
  }

  getAll(){
    this._httpClient.get<Producto[]>('http://localhost:3000/productos')
    .subscribe(
      (data) => this.listadoProductos=data
    );
  }

  borrar(productoId:number){
    return this._httpClient.delete(`http://localhost:3000/productos/${productoId}`)
  }

  getById(productoId:number){
    return this._httpClient.get<Producto>(`http://localhost:3000/productos/${productoId}`)
  }
}


