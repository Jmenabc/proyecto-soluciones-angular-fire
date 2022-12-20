import { Component } from '@angular/core';
import { EjemploService } from 'src/app/ejemplo.service';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  coleccion = "examen";
  peliculas: any[] = [];
  constructor(
    private firebase: EjemploService
  ) {}

  ngOnInit(): void {
    // Cargamos la lista de películas
    this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.peliculas = [];
        resp.forEach( (peliculaSnapshot: any) => {
          this.peliculas.push(
            {
              documentId: peliculaSnapshot.payload.doc.id,
              data: peliculaSnapshot.payload.doc.data()
            }
          )
        });
      }
    )
  }
}
