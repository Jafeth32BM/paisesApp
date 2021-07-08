import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string='';
  hayError: boolean = false;
  paises: Country[] =[];
  constructor(private paisServioce: PaisService) { }
  buscar(termino:string){
    this.hayError=false;
    this.termino = termino;

    this.paisServioce.buscarPais(termino)
    .subscribe(pais=>{
      console.log(pais);
      this.paises = pais;

    },(err)=>{
      this.hayError=true;
      this.paises = [];
    });
  }
  sugerencias(termino: string){
    this.hayError=false;
    // TODO: sugerencias
  }
}
