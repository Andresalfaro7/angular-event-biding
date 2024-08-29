import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PropiedadComponent} from './propiedad/propiedad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PropiedadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
}
