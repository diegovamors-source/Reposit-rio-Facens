import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mural-recados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './mural-recados.html',
  styleUrl: './mural-recados.css',
})
export class MuralRecadosComponent {

  recados: string[] = [
    'Avanti Palestra!',
    'O gol e muito grande, como pode perder penalti',
    'Dancar a valsa dos 15 anos',
    'Comer moranguinhos'
  ];

  recadoSelecionado: string = '';
  novoRecado: string = '';
  lido: boolean = false;
  curtidas: number = 0;

  selecionar(recado: string) {
    this.recadoSelecionado = recado;
    this.lido = false;
    this.curtidas = 0;
  }

  adicionar() {
    if (this.novoRecado !== '') {
      this.recados.push(this.novoRecado);
      this.novoRecado = '';
    }
  }

  mudarLeitura() {
    this.lido = !this.lido;
  }

  darLike() {
    this.curtidas++;
  }
}
