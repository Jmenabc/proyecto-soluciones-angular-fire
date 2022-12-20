import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';



@NgModule({
  declarations: [
    EjemploComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule
  ]
})
export class EjemploModule { }
