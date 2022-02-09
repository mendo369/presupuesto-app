import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingresoOperacion";
  descripcionInput: string;
  ValorInput: number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === "ingresoOperacion") {
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.ValorInput));
    }
    else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.ValorInput))
    }

    this.descripcionInput = null;
    this.ValorInput = null;
  }

}
