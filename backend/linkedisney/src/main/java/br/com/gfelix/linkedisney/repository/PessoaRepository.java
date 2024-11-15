package br.com.gfelix.linkedisney.repository;

import br.com.gfelix.linkedisney.domain.PessoaDomain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PessoaRepository extends JpaRepository<PessoaDomain, Long> {
  PessoaDomain findByCpf(String cpf);
}
