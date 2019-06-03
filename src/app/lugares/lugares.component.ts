import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';
  lat:number = 4.6560716;
  lng:number = -74.0595918;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    // this.lugares = lugaresService.getLugares();
    lugaresService.getLugares().valueChanges().subscribe(lugares => {
      this.lugares = lugares;
    });
  }
}
