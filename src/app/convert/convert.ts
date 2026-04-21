import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {

  meters: number = 0;
  feet: number = 0;

  celsius: number = 0;
  fahrenheit: number = 0;

  convertMeters() {
    this.feet = this.meters * 3.28084;
  }

  convertCelsius() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }
}