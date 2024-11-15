package br.com.gfelix.linkedisney.controller;

import br.com.gfelix.linkedisney.domain.CadastroDomain;
import br.com.gfelix.linkedisney.domain.ExperienciaDomain;
import br.com.gfelix.linkedisney.domain.PessoaDomain;
import br.com.gfelix.linkedisney.repository.ExperienciaRepository;
import br.com.gfelix.linkedisney.repository.PessoaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@Slf4j
public class CurriculoController {

  @Autowired
  PessoaRepository pessoaRepository;

  @Autowired
  ExperienciaRepository experienciaRepository;


  @PostMapping("register")
  public ResponseEntity<PessoaDomain> registerCurriculo(@RequestBody CadastroDomain cadastroDomain) {
    var pessoaCpfCadastrado = pessoaRepository.findByCpf(cadastroDomain.getCadastroPessoal().getCpf());

    if (!ObjectUtils.isEmpty(pessoaCpfCadastrado)) {
      return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).body(pessoaCpfCadastrado);
    }

    var pessoaId = pessoaRepository.save(cadastroDomain.getCadastroPessoal());

    var experiencias = cadastroDomain.getExperiencias();
    for (ExperienciaDomain experienciaDomain : experiencias) {
      experienciaDomain.setPessoaId(pessoaId.getId());
    }

    experienciaRepository.saveAll(experiencias);

    return ResponseEntity.ok().build();
  }

  @GetMapping("find")
  public ResponseEntity<List<PessoaDomain>> findAllPessoas() {
    return ResponseEntity.ok(pessoaRepository.findAll());
  }

  @GetMapping("find/{id}")
  public ResponseEntity<CadastroDomain> findById(@PathVariable("id") Long id) {
    var pessoaCadastrada = pessoaRepository.findById(id).get();

    var experienciaList = experienciaRepository.findAllByPessoaId(Long.valueOf(pessoaCadastrada.getId()));

    var response = CadastroDomain.builder().cadastroPessoal(pessoaCadastrada).experiencias(experienciaList);

    return ResponseEntity.ok(response.build());
  }
}
