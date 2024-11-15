import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroModel } from '../cadastro-curriculo/model/cadastro-model';
import { CurriculoService } from '../shared/service/curriculo-service.service';

@Component({
  selector: 'app-detalhe-curriculo',
  templateUrl: './detalhe-curriculo.component.html',
  styleUrl: './detalhe-curriculo.component.scss',
})
export class DetalheCurriculoComponent implements OnInit {
  curriculo!: CadastroModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private curriculoService: CurriculoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.curriculoService.findCurriculoById(id).subscribe((data) => {
        this.curriculo = data;
      });
    });
  }
}
