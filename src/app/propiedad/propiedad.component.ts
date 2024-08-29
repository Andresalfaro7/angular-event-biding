import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent {

  color_property:string = "colorblue";

  changeColor(){
    this.color_property = this.color_property == 'colorblue' ? 'colorred' : 'colorblue';
  }
}
