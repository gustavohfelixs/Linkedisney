import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-curriculo',
  templateUrl: './cadastro-curriculo.component.html',
  styleUrl: './cadastro-curriculo.component.scss',
})
export class CadastroCurriculoComponent {
  options: FormGroup;
  cpf!: string;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dtNascimento: [Date.now(), Validators.required],
      genero: ['', Validators.required],
      objetivo: ['', Validators.required],
    });
  }
}
