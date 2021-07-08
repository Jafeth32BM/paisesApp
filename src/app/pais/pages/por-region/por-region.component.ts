import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[]=[];
  constructor() {}
  getClassCSS(region: string):string{
    return (region === this.regionActiva)
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }
  activarRegion(region: string) {
    this.regionActiva = region;
  }

}
