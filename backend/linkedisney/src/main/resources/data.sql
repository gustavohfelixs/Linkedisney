CREATE TABLE Pessoa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  dtNascimento DATE NOT NULL,
  genero VARCHAR(50) NOT NULL,
  objetivo VARCHAR(255) NOT NULL
);


CREATE TABLE Experiencia (
  id SERIAL PRIMARY KEY,
  nomeExp VARCHAR(255) NOT NULL,
  empresa VARCHAR(255) NOT NULL,
  dtInicio DATE NOT NULL,
  dtFim DATE,
  desc TEXT NOT NULL,
  pessoaId VARCHAR(255),
  FOREIGN KEY (pessoaId) REFERENCES Pessoa(id)
);


INSERT INTO Pessoa (nome, cpf, dtNascimento, genero, objetivo) VALUES
( 'Gustavo Felix', '12345678901', '1990-01-01', 'Masculino', 'Desenvolvedor de Software'),
('Ana Silva', '23456789012', '1985-02-15', 'Feminino', 'Analista de Qualidade'),
( 'Carlos Souza', '34567890123', '1988-03-20', 'Masculino', 'Agilista'),
( 'Mariana Oliveira', '45678901234', '1992-04-25', 'Feminino', 'Product Owner'),
('Pedro Santos', '56789012345', '1987-05-30', 'Masculino', 'Tech Lead');

-- Inserts para a tabela Experiencia
INSERT INTO Experiencia (nomeExp, empresa, dtInicio, dtFim, desc, pessoaId) VALUES
('Desenvolvedor de Software', 'CWI Software', '2020-01-01', '2022-12-31', 'Desenvolvimento de aplicações web e mobile utilizando tecnologias modernas.', '1'),
('Analista de Qualidade', 'QA Solutions', '2019-03-01', '2021-08-31', 'Realização de testes manuais e automatizados para garantir a qualidade do software.', '2'),
('Agilista', 'Agile Experts', '2018-05-01', '2020-10-31', 'Implementação de metodologias ágeis e facilitação de cerimônias Scrum.', '3'),
('Product Owner', 'Tech Innovators', '2021-02-01', '2023-01-31', 'Gestão de backlog, definição de prioridades e comunicação com stakeholders.', '4'),
('Tech Lead', 'Innovative Tech', '2017-07-01', '2022-06-30', 'Liderança técnica de equipes de desenvolvimento e definição de arquiteturas de software.', '5');

