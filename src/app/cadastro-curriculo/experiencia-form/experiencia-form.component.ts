import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../model/pessoa-model';
import { Experiencia } from '../model/curriculo/experiencia';
import { CadastroModel } from '../model/cadastro-model';
import { HttpClient } from '@angular/common/http';
import { CurriculoService } from '../../shared/service/curriculo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia-form',
  templateUrl: './experiencia-form.component.html',
  styleUrl: './experiencia-form.component.scss',
})
export class ExperienciaFormComponent implements OnInit {
  experienciaForm: FormGroup;
  @Input() cadastroPessoal!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private curriculoService: CurriculoService,
    private router: Router
  ) {
    this.experienciaForm = this.fb.group({
      experiencias: this.fb.array([]), // Inicializa o FormArray vazio
    });
  }

  ngOnInit(): void {
    this.adicionarExperiencia(); // Adiciona uma primeira experiência automaticamente
  }

  get experiencias(): FormArray {
    return this.experienciaForm.get('experiencias') as FormArray;
  }

  novaExperiencia(): FormGroup {
    return this.fb.group({
      nomeExp: ['', Validators.required],
      empresa: ['', Validators.required],
      dtInicio: ['', Validators.required],
      dtFim: [''],
      desc: ['', Validators.required],
    });
  }

  adicionarExperiencia() {
    this.experiencias.push(this.novaExperiencia());
  }

  removerExperiencia(index: number) {
    console.log('remover');
    this.experiencias.removeAt(index);
  }

  onSubmit() {
    const cadastro: CadastroModel = {
      cadastroPessoal: this.cadastroPessoal.value,
      experiencias: this.experienciaForm.value.experiencias,
    };
    console.log(cadastro);
    this.curriculoService.registerCurriculo(cadastro).subscribe((data) => {
      if (data.status === 200) {
        console.log('USuário cadastrado com sucesso');
      } else if (data.status === 208) {
        console.log('Usuário já cadastrado');
      } else {
        console.log('Erro não esperado');
      }
      this.router.navigate(['/consulta']);
    });
  }
}
