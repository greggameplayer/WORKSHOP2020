<?php
namespace Models;

function getUser($Email, $Password){
    if (! isset($_SESSION["attempts"])){
        $_SESSION["attempts"] = 0;
    }

    $qcheckemail = \Helpers\getDatabaseConnection()->prepare("SELECT * FROM utilisateur WHERE email = :email");
    $qcheckemail->execute([
        "email" => $Email
    ]);
    if ($qcheckemail->rowCount() == 1) {
        $qcheckpassword = \Helpers\getDatabaseConnection()->prepare("SELECT password, id FROM utilisateur WHERE email = :email");
        $qcheckpassword->execute([
            "email" => $Email
        ]);
        while ($donnees = $qcheckpassword->fetch()) {
            if (password_verify($Password, $donnees["password"])) {
                $_SESSION["failed"] = false;
                $_SESSION["attempts"] = 0;
                $_SESSION["id"] = $donnees["id"];
                } else {
                    $_SESSION["failed"] = "mdp";
                    $_SESSION["attempts"] += 1;
                }
            }
            $qcheckpassword->closeCursor();
        }
        $qcheckemail->closeCursor();
        $_SESSION["failed"] = "user";
        $_SESSION["attempts"] += 1;
    \Controllers\getHomepageController();
}

function getUserById($id){
    $qgetUserById = \Helpers\getDatabaseConnection()->prepare("SELECT * FROM utilisateur WHERE id = :id");
    $qgetUserById->execute([
        "id" => $id
    ]);
    $result = $qgetUserById->fetchAll();
    $qgetUserById->closeCursor();
    return $result;
}
