import { Injectable } from '@angular/core';
import { Cliente } from '../modelo/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CliRepoService {

  listadoClientes:Cliente[] = [] 
  constructor(private _httpClient:HttpClient) { }

  agregar(nuevoCliente:Cliente){
    return this._httpClient.post('http://localhost:3000/clientes',nuevoCliente);
  }

  actualizar(cliente:Cliente){
    return this._httpClient.put(`http://localhost:3000/clientes/${cliente.id}`,cliente);
  }

  getAll(){
    this._httpClient.get<Cliente[]>('http://localhost:3000/clientes')
    .subscribe(
      (data) => this.listadoClientes=data
    );
  }

  borrar(clienteId:number){
    return this._httpClient.delete(`http://localhost:3000/clientes/${clienteId}`)
  }

  getById(clienteId:number){
    return this._httpClient.get<Cliente>(`http://localhost:3000/clientes/${clienteId}`)
  }
} 
