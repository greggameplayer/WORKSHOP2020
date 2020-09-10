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
    $q = \Helpers\getDatabaseConnection()->prepare("SELECT categorie.nom, possession.score FROM possession, categorie, utilisateur WHERE possession.idUtilisateur = utilisateur.id and possession.idCategorie = categorie.id and possession.idUtilisateur = :id");
    $req = \Helpers\getDatabaseConnection()->prepare('SELECT ROUND(AVG(score), 2) from possession where possession.idUtilisateur = :id');
    $q->execute([
        "id" => $IdUser
    ]);
    $req->execute([
        "id" => $IdUser
    ]);
    $tab = $q->fetchAll();
    for ($i = 0; $i < count($tab); $i++){
        $result[$tab[$i]["nom"]] = $tab[$i]["score"];
    }
    $result["Utilisateur"] = $req->fetch()[0];
    return $result;
}
