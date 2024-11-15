import { Experiencia } from './curriculo/experiencia';
import { Pessoa } from './pessoa-model';

export interface CadastroModel {
  cadastroPessoal: Pessoa;
  experiencias: Experiencia[];
}
