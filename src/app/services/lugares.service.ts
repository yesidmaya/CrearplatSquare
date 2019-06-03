import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LugaresService {
    lugares: any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia'},
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la Pasadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Suchi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapatería el Clavo'}
    ];
    constructor(private afDB: AngularFireDatabase, private http: HttpClient) {}
    public getLugares() {
        return this.afDB.list('lugares/');
    }
    public buscarLugar(id) {
        return this.lugares.filter((lugar) => { return lugar.id == id})[0] || null;
    }
    public guardarLugar(lugar) {
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
    public editarLugar(lugar) {
        console.log(lugar);
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    }
    // public obtenerGeoData(direccion) {
    //     // return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    //     return this.http.get('https://www.google.com/maps/search/' + direccion);
    // }
    public getLugar(id) {
        return this.afDB.object('lugares/' + id);
    }
}
