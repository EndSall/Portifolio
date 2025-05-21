create database if not exists consultas_medicas;

use consultas_medicas;

create table pacientes(
id int auto_increment primary key,
nome varchar(100),
cpf varchar(14),
data_nascimento date,
telefone varchar(20),
email varchar(100),
endereco text
);

create table medicos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
crm VARCHAR(20),
especialidade VARCHAR(50),
telefone VARCHAR(20),
email VARCHAR(100)
);
create table consultas(
id INT AUTO_INCREMENT PRIMARY KEY,
id_paciente INT,
id_medico INT,
data_hora DATETIME,
status ENUM('agendada', 'realizada', 'cancelada'),
FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
FOREIGN KEY (id_medico) REFERENCES medicos(id)
);
create table prontuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
id_consulta INT,
diagnostico TEXT,
prescricao TEXT,
observacoes TEXT,
FOREIGN KEY (id_consulta) REFERENCES consultas(id)
);