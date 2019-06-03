import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar:any = {};
  id:any = null;
  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id != 'new') {
      this.lugaresService.getLugar(this.id).valueChanges().subscribe((lugar) => {
        this.lugar = lugar;
      });
    }
  }
  guardarLugar() {
    // var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    // this.lugaresService.obtenerGeoData(direccion).subscribe((result) => {
    //   this.lugar.lat = 0;
    //   this.lugar.lng = 0;
    //   debugger;
    //   this.lugar.id = Date.now();
    //   this.lugaresService.guardarLugar(this.lugar);
    //   alert('Negocio Guardado con Éxito.');
    //   this.lugar = {};
    // });
    
    if (this.id != 'new') {
      this.lugaresService.editarLugar(this.lugar);
      alert('Negocio Editado Correctamente.');
    } else {
      this.lugar.id = Date.now();
      this.lugaresService.guardarLugar(this.lugar);
      alert('Negocio Guardado con Éxito.');
    }
    this.lugar = {};
  }
}
