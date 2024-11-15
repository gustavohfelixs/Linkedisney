import { Pessoa } from './../../cadastro-curriculo/model/pessoa-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroModel } from '../../cadastro-curriculo/model/cadastro-model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  constructor(private http: HttpClient) {}

  registerCurriculo(cadastro: CadastroModel) {
    return this.http.post<any>('http://localhost:8080/register', cadastro, {
      observe: 'response',
    });
  }

  findAllPessoas() {
    return this.http.get<Pessoa[]>('http://localhost:8080/find');
  }

  findCurriculoById(id: any) {
    return this.http.get<CadastroModel>(`http://localhost:8080/find/${id}`);
  }
}
