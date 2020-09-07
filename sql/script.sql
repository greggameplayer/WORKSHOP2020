CREATE DATABASE workshop 

CREATE TABLE utilisateur(
   id INT PRIMARY KEY  AUTO_INCREMENT,
   email VARCHAR(50),
   password VARCHAR(50)
)ENGINE=INNODB;

CREATE TABLE produit(
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   nom VARCHAR(50),
   consommation DECIMAL(15,2),
   utilisationHebdo INT 
)ENGINE=INNODB;

CREATE TABLE possession (
    idUtilisateur INT,
    idProduit INT,
    score DECIMAL(15, 2),
    PRIMARY KEY(idUtilisateur, idProduit),
    FOREIGN KEY(idUtilisateur) REFERENCES utilisateur(id),
    FOREIGN KEY(idProduit) REFERENCES produit(id)
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


