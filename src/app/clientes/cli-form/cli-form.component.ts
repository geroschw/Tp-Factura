import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { CliRepoService } from '../cli-repo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cli-form',
  templateUrl: './cli-form.component.html',
  styleUrls: ['./cli-form.component.css']
})
export class CliFormComponent implements OnInit {

  listadoCli: string[] = []
  cliente: Cliente = new Cliente(0, "", "", "");
  edicion: boolean = false;

  constructor(private _cliRepoService: CliRepoService, private rutaActiva: ActivatedRoute) {
  }

  ngOnInit() {

    if (this.rutaActiva.snapshot.paramMap.get('id') != null) {
      this._cliRepoService.getById(parseInt(this.rutaActiva.snapshot.paramMap.get('id')))
        .subscribe(x => this.cliente = x)
         this.edicion = true;
    }
  }

  grabarCliente() {
    if (this.edicion) {
      this._cliRepoService.actualizar(this.cliente)
        .subscribe(
          (Response) => console.log("Se modificó el producto", Response)
        )
    } else {
      this._cliRepoService.agregar(this.cliente)
        .subscribe(
          (Response) => console.log("Se creó el producto", Response)
        )
    }
  }

  editarCliente(cliId: number) {
    this._cliRepoService.getById(cliId)
      .subscribe(
        (cliente) => {
        this.cliente = cliente;
          this.edicion = true;
        }
      )
  }

}
