import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CliRepoService } from '../cli-repo.service';


@Component({
  selector: 'app-cli-list',
  templateUrl: './cli-list.component.html',
  styleUrls: ['./cli-list.component.css']
})
export class CliListComponent implements OnInit {

  constructor(private _CliRepoService:CliRepoService) { }
  @Output() clienteEditado:EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this._CliRepoService.getAll();
  }

  obtenerCliente(cliId: number) {
    this._CliRepoService.getById(cliId)
      .subscribe(
        (cliente) => console.log(cliente)
      )
  }
  borrarCliente(cliId: number) {
    this._CliRepoService.borrar(cliId)
      .subscribe(
        (response) => console.log('Se borro el cliente', response)
      )
  }
}
