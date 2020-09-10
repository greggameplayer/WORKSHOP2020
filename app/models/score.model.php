<?php
namespace Models;

function getScores($IdUser){
    $result = [
        "congelateur" => "inconnu",
        "Aspirateur" => "inconnu",
        "refrigerateur" => "inconnu",
        "seche-linge" => "inconnu",
        "Lave-vaisselle" => "inconnu",
        "Lave-linge" => "inconnu",
        "Television LCD" => "inconnu",
        "Chargeur de telephone" => "inconnu",
        "Ordinateur" => "inconnu",
        "Four micro-ondes" => "inconnu",
        "Four classique" => "inconnu",
        "Ampoules" => "inconnu",
        "Ampoules basses consoles" => "inconnu",
        "Utilisateur" => "inconnu"
    ];
    $q = \Helpers\getDatabaseConnection()->prepare("SELECT categorie.nom, possession.score, categorie.consommation FROM possession, categorie, utilisateur WHERE possession.idUtilisateur = utilisateur.id and possession.idCategorie = categorie.id and possession.idUtilisateur = :id");
    $req = \Helpers\getDatabaseConnection()->prepare('SELECT ROUND(AVG(10 - possession.score/ categorie.consommation), 2) from possession, categorie where possession.idUtilisateur = :id and possession.idCategorie = categorie.id');
    $q->execute([
        "id" => $IdUser
    ]);
    $req->execute([
        "id" => $IdUser
    ]);
    $tab = $q->fetchAll();
    for ($i = 0; $i < count($tab); $i++){
        $result[$tab[$i]["nom"]] = round(10 - ($tab[$i]["score"]/$tab[$i]["consommation"]), 2);
    }
    $result["Utilisateur"] = $req->fetch()[0];
    return $result;
}

function getAlternative(){
    $result = [
        "congelateur" => "inconnu",
        "Aspirateur" => "inconnu",
        "refrigerateur" => "inconnu",
        "seche-linge" => "inconnu",
        "Lave-vaisselle" => "inconnu",
        "Lave-linge" => "inconnu",
        "Television LCD" => "inconnu",
        "Chargeur de telephone" => "inconnu",
        "Ordinateur" => "inconnu",
        "Four micro-ondes" => "inconnu",
        "Four classique" => "inconnu",
        "Ampoules" => "inconnu",
        "Ampoules basses consoles" => "inconnu"
    ];

    $q = \Helpers\getDatabaseConnection()->prepare("SELECT produitalternative.nom, categorie.nom FROM produitalternative, categorie WHERE produitalternative.idCategorie = categorie.id");
    $q->execute([]);
    $tab = $q->fetchAll();
    for ($i = 0; $i < count($tab); $i++){
        $result[$tab[$i][1]] = $tab[$i][0];
    }
    return $result;
}
