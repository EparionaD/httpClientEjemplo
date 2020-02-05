import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent{

    paises:any[] = [];

    constructor(private _servicio:PaisesService) {
        this._servicio.getPaises().subscribe(
            (respuesta:any) =>{
                this.paises = respuesta;
            }
        );
    }
}
