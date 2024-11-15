package br.com.gfelix.linkedisney.domain;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class CadastroDomain {
  private PessoaDomain cadastroPessoal;
  private List<ExperienciaDomain> experiencias;
}
