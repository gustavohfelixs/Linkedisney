package br.com.gfelix.linkedisney.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "pessoa")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PessoaDomain {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  @Column(name = "id")
  private Integer id;
  @Column(name = "nome")
  private String nome;
  @Column(name = "cpf")
  private String cpf;
  @Column(name = "dtnascimento")
  private Date dtNascimento;
  @Column(name = "genero")
  private String genero;
  @Column(name = "objetivo")
  private String objetivo;
}
