import { Component } from '@angular/core';
import { MuralRecadosComponent } from './mural-recados/mural-recados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MuralRecadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
