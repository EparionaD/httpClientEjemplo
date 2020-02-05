import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {app_rutas} from './app.routes';

//Servicios
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LugaresComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        app_rutas,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
