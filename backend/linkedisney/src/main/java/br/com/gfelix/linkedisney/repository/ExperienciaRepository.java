package br.com.gfelix.linkedisney.repository;

import br.com.gfelix.linkedisney.domain.ExperienciaDomain;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExperienciaRepository extends JpaRepository<ExperienciaDomain, Long> {

  List<ExperienciaDomain> findAllByPessoaId(Long pessoaId);
}
