import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';

const rutas: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'lugares', component: LugaresComponent },
];

export const app_rutas = RouterModule.forRoot(rutas);
