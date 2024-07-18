import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Tienda de Herramientas y Materiales';
  isListVisible = true;
  materialsAndTools: string[] = [
    'Cemento',
    'Ladrillos',
    'Arena',
    'Grava',
    'Madera',
    'Clavos',
    'Pintura',
    'Tubos PVC',
    'Cables eléctricos',
    'Herramienta multiuso'
  ];

  headerStyle: { [key: string]: string } = {
    'color': 'green',
    'font-family': 'Verdana, sans-serif'
  };

  parrafoClass = {
    'blue-text': true,
  };

  toggleVisibility() {
    this.isListVisible = !this.isListVisible;
  }
}
