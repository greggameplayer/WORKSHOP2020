<?php
namespace Models;
use Google_Service_Calendar_AclRule;
use Google_Service_Calendar_AclRuleScope;
use Google_Service_Calendar_Calendar;
use function Helpers\getDatabaseConnection;
use function Helpers\getSharedDatabaseConnection;

function setUser($Email, $Password){
    $uniquemail = 1;
    $qcheckmail = getDatabaseConnection()->prepare("SELECT utilisateur.id FROM utilisateur where utilisateur.email = :email");
    $qcheckmail->execute([
        "email" => $Email
    ]);
    if($qcheckmail->rowCount() > 0){
        $uniquemail = 0;
    }
    $qcheckmail->closeCursor();
    if($uniquemail == 1) {
        $options = [
            "cost" => 12,
        ];
        $hashpassword = password_hash($Password, PASSWORD_BCRYPT, $options);
            $qinscription = getDatabaseConnection()->prepare("INSERT INTO utilisateur(email,password) VALUES(:email,:password)");
            $qinscription->execute([
                "email" => $Email,
                "password" => $hashpassword
            ]);
            $qinscription->closeCursor();
    }
    echo (($uniquemail == 1) ? "le nouvel utilisateur a été créé" : "l'utilisateur existe déjà");
}
function kodex_random_string($length=30){
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $string = '';
    for($i=0; $i<$length; $i++){
        $string .= $chars[rand(0, strlen($chars)-1)];
    }
    return $string;
}
