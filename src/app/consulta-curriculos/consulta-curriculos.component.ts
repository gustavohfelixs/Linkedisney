import { CurriculoService } from './../shared/service/curriculo-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroModel } from '../cadastro-curriculo/model/cadastro-model';
import { Pessoa } from '../cadastro-curriculo/model/pessoa-model';

@Component({
  selector: 'app-consulta-curriculos',
  templateUrl: './consulta-curriculos.component.html',
  styleUrl: './consulta-curriculos.component.scss',
})
export class ConsultaCurriculosComponent implements OnInit {
  constructor(
    private router: Router,
    private curriculoService: CurriculoService
  ) {}

  curriculo!: CadastroModel;

  pessoas!: Pessoa[];

  ngOnInit(): void {
    this.curriculoService
      .findAllPessoas()
      .subscribe((data) => (this.pessoas = data));
  }

  verEmDetalhes(id: any) {
    this.curriculoService.findCurriculoById(id).subscribe((data) => {
      console.log(data);
      this.curriculo = data;
      this.router.navigate(['/consulta', id], {
        state: { curriculo: this.curriculo },
      });
    });
  }
}
