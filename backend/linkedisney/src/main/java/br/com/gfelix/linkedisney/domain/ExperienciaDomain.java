package br.com.gfelix.linkedisney.domain;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "experiencia")
public class ExperienciaDomain {
  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  @Column(name = "id")
  private Integer id;
  @Column(name = "nomeexp")
  private String nomeExp;
  @Column(name = "empresa")
  private String empresa;
  @Column(name = "dtinicio")
  private Date dtInicio;
  @Column(name = "dtfim")
  private Date dtFim;
  @Column(name = "desc")
  private String desc;
  @Column(name = "pessoaid")
  private Integer pessoaId;
}
