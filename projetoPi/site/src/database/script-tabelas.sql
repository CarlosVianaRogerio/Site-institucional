/*tabelas fleming local*/
CREATE DATABASE fleming;
USE fleming;



CREATE TABLE Cliente(
idCliente int primary key auto_increment,
cnpj char(14) not null,
nome varchar(45) not null,
telefoneEmpresarial varchar(20) not null,
telefoneCelular varchar(20) not null,
email varchar(45) not null,
senha varchar(45) not null
);

CREATE TABLE Usuario(
idUsuario int not null,
fkCliente int not null,
email varchar(45) not null,
senha varchar(45) not null,
cargo varchar(45) not null,
nome varchar(45) not null,
cpf varchar(45) not null,
telefoneEmpresarial varchar(20) not null,
telefoneCelular varchar(20) not null,
foreign key (fkCliente) references Cliente(idCliente),
primary key (idUsuario,fkCliente)
);



CREATE TABLE Laboratorio(
idLaboratorio int not null,
fkCliente int not null,
unidade varchar(45) not null,
cep char(10) not null,
uf char(2) not null,
cidade varchar(45) not null,
bairro varchar(45) not null,
numero int not null,
complemento varchar(45) ,
referencia varchar(45) ,
foreign key (fkCliente) references Cliente(idCliente),
primary key (idLaboratorio,fkCliente)
);

CREATE TABLE Sala(
idSala int not null,
fkLaboratorio int not null,
fkCliente int not null,
nomeSala varchar(45) not null,
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
primary key(idSala,fkLaboratorio,fkCliente)
);



CREATE TABLE Sensor(
idSensor int not null,
fkSala int not null,
fkLaboratorio int not null,
fkCliente int not null,
tipoSensor varchar(45) not null,
posicionamento varchar(45) not null,
foreign key(fkSala) references Sala(idSala),
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
primary key (idSensor,fkSala,fkLaboratorio,fkCliente)
);

CREATE TABLE Captura(
idCaptura int not null,
fkSensor int not null,
fkSala int not null,
fkLaboratorio int not null,
fkCliente int not null,
umidade double not null,
dtTime datetime,
foreign key(fkSensor) references Sensor(idSensor),
foreign key(fkSala) references Sala(idSala),
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
primary key (idCaptura,fkSensor,fkSala,fkLaboratorio,fkCliente)
);

CREATE TABLE Contato(
idContato int primary key auto_increment,
emailContato varchar(45),
nomeContato varchar(45),
mensagem varchar(45)
);
/*Tabelas Fleming Azure*/

CREATE TABLE Cliente(
idCliente int primary key identity(1,1),
cnpj char(14) not null,
nome varchar(45) not null,
telefoneEmpresarial varchar(20) not null,
telefoneCelular varchar(20) not null,
email varchar(45) not null,
senha varchar(45) not null
);

CREATE TABLE Usuario(
idUsuario int not null identity(10,1),
fkCliente int not null,
email varchar(45) not null,
senha varchar(45) not null,
cargo varchar(45) not null,
nome varchar(45) not null,
cpf varchar(45) not null,
telefoneEmpresarial varchar(20) not null,
telefoneCelular varchar(20) not null,
foreign key (fkCliente) references Cliente(idCliente),
primary key (idUsuario)
);



CREATE TABLE Laboratorio(
idLaboratorio int not null identity(100,1),
fkCliente int not null,
unidade varchar(45) not null,
cep char(10) not null,
uf char(2) not null,
cidade varchar(45) not null,
bairro varchar(45) not null,
numero int not null,
complemento varchar(45) ,
referencia varchar(45) ,
foreign key (fkCliente) references Cliente(idCliente),
primary key (idLaboratorio)
);

CREATE TABLE Sala(
idSala int not null identity(1,1),
fkLaboratorio int not null,
fkCliente int not null,
nomeSala varchar(45) not null,
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
primary key(idSala)
);

select * from [dbo].[Laboratorio];
drop table [dbo].[Laboratorio];

CREATE TABLE Laboratorio(
idLaboratorio int not null identity(100,1),
fkCliente int not null,
unidade varchar(45) not null,
cep char(10) not null,
uf char(2) not null,
cidade varchar(45) not null,
bairro varchar(45) not null,
numero int not null,
complemento varchar(45) ,
referencia varchar(45) ,
foreign key (fkCliente) references Cliente(idCliente),
primary key (idLaboratorio)
);

CREATE TABLE Sensor(
idSensor int not null identity(1,1),
fkSala int not null,
fkLaboratorio int not null,
fkCliente int not null,
tipoSensor varchar(45) not null,
posicionamento varchar(45) not null,
foreign key(fkSala) references Sala(idSala),
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
primary key (idSensor)
);

CREATE TABLE Captura(
idCaptura int primary key identity (10,1),
fkSensor int not null,
fkSala int not null,
fkLaboratorio int not null,
fkCliente int not null,
umidade decimal(10,2) not null,
dtTime datetime
foreign key(fkSensor) references Sensor(idSensor),
foreign key(fkSala) references Sala(idSala),
foreign key(fkLaboratorio) references Laboratorio(idLaboratorio),
foreign key(fkCliente) references Cliente(idCliente),
);

CREATE TABLE Contato(
idContato int primary key identity (1,1),
emailContato varchar(45),
nomeContato varchar(45),
mensagem varchar(45)
);