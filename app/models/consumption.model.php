<?php
namespace Models;

function setUserConsumption($IdUser, $endInfo){
    $ids = [

    ];
    $endInfo = json_decode($endInfo);
    foreach($endInfo as $property => $value){
            $qGetIds = \Helpers\getDatabaseConnection()->prepare("SELECT id, consommation FROM categorie where nom = :name");
            $qGetIds->execute([
                "name" => $property
            ]);
            $ids[$qGetIds->fetch()["id"]] = ($value * 5);
            $qGetIds->closeCursor();
    }

    foreach($ids as $id) {
        if ($id != 0) {
            $q = \Helpers\getDatabaseConnection()->prepare("INSERT INTO possession(idUtilisateur, idCategorie, score) VALUES(:iduser, :idcat, :score)");
            $q->execute([
                "iduser" => $IdUser,
                "idcat" => array_search($id, $ids),
                "score" => $id
            ]);
        }
    }
    echo "Vos scores ont été correctement calculé";
}
