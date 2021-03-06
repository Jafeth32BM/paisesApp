import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {
  termino: string='';
  hayError: boolean = false;
  paises: Country[] =[];
  paisesSugeridos: Country[] =[];
  mostrarSugerencias: boolean = false;

  constructor(private paisServioce: PaisService) { }
  buscar(termino:string){
    this.mostrarSugerencias=false;
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
    this.mostrarSugerencias=true;
    this.hayError=false;
    this.termino= termino;
    this.paisServioce.buscarPais(termino)
    .subscribe(paises=> this.paisesSugeridos=paises.splice(0,5),
    (err) => this.paisesSugeridos=[]
    );
  }
}
