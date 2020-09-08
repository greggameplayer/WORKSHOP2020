CREATE DATABASE workshop 

CREATE TABLE utilisateur(
   id INT PRIMARY KEY  AUTO_INCREMENT,
   email VARCHAR(50),
   password VARCHAR(500)
)ENGINE=INNODB;

CREATE TABLE categorie(
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   nom VARCHAR(50),
   consommation DECIMAL(15,2),
   utilisationHebdo INT 
)ENGINE=INNODB;

CREATE TABLE produitAlternative(
   id INT AUTO_INCREMENT,
   nom VARCHAR(50) NOT NULL UNIQUE,
   consommation INT,
   utilisationHebdomadaire INT,
   idCategorie INT NOT NULL,
   PRIMARY KEY(id),
   FOREIGN KEY(idCategorie) REFERENCES categorie(id)
);

CREATE TABLE possession (
    idUtilisateur INT,
    idCategorie INT,
    score DECIMAL(15, 2),
    PRIMARY KEY(idUtilisateur, idProduit),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(id),
    FOREIGN KEY(idCategorie) REFERENCES categorie(id)
)ENGINE=INNODB;

INSERT INTO produit (nom, consomation, utilisationHebdo)
VALUES
('Congélateur', 350, 168),
('Réfrigérateur', 200, 168),
('Sèche-linge', 900, 12),
('Lave-vaisselle', 625, 10),
('Lave-linge', 1150, 10),
('Télévision LCD', 110, 21),
('Aspirateur', 150, 2),
('Chargeur de téléphone', 2, 7),
('Ordinateur', 1100, 100),
('Four micro-ondes', 40, 1),
('Four classique', 365, 4),
('Ampoules', 110, 5),
('Ampoules basses consoles', 22, 5);

insert into utilisateur (email, password)
VALUES
('victormarit.95@gmail.com', '$2y$10$zaNn9Uz09ve.UHZ4X0NKCuSg0OsPa1R4TllBuYsMcQwia1CRldgua');


INSERT INTO produitAlternative(nom, consommation, utilisationHebdomadaire, idCategorie)
VALUES 
('Congélateur armoire Bosch GSV33VWEV', 204, 168, 1),
('WHIRLPOOL W7821OOX',204,168,2),
(' ELECTROLUX EW7H4802SC', 309, 12, 3),
('Essentielb ELV-442b', 262, 12, 4),
('INDESIT BTWCA51052',148,10,5),
('Toshiba U2963DG',96,21,6),
('Essentielb EAS 73 HARDFLOOR',23,2,7),
('ULTRA-PORTABLE WHY! N240WU 14',750,100,9),
('PROLINE SM22',25,2,10),
('Whirlpool EX AKZ9626IX',204,4,11),
('Ampoule Philips LED 6,7 Watt E27',7,5,13);
