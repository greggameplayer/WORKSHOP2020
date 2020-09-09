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
        "Ampoules basses consoles" => "inconnu"
    ];
    $q = \Helpers\getDatabaseConnection()->prepare("SELECT categorie.nom, possession.score FROM possession, categorie, utilisateur WHERE possession.idUtilisateur = utilisateur.id and possession.idCategorie = categorie.id and possession.idUtilisateur = :id");
    $q->execute([
        "id" => $IdUser
    ]);
    $tab = $q->fetchAll();
    for ($i = 0; $i < count($tab); $i++){
        $result[$tab[$i]["nom"]] = $tab[$i]["score"];
    }
    return $result;
}
