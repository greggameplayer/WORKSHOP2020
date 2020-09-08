<?php
namespace Controllers;

use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use function Helpers\getRenderer;

function getHomepageController(){
    if(isset($_SESSION["id"]) && isset($_SESSION["failed"]) && $_SESSION["failed"] == false){
        $twig = getRenderer();
        echo $twig->render('homepage.html', ["Session" => $_SESSION["id"]]);
    }else if(isset($_SESSION["failed"]) && ($_SESSION["failed"] == "mdp" || $_SESSION["failed"] == "user")){
        $twig = getRenderer();
        if ($_SESSION["failed"] == "mdp") {
            echo $twig->render('homepage.html', ["Failed" => "mdp"]);
        } elseif ($_SESSION["failed"] == "user") {
            echo $twig->render('homepage.html', ["Failed" => "user"]);
        }
        $_SESSION["failed"] = false;

    }else{
        $twig = getRenderer();
        echo $twig->render('homepage.html');
    }

}

function returnHomepageController(){
    if(isset($_SESSION["id"]) && isset($_SESSION["failed"]) && $_SESSION["failed"] == false){
        $twig = getRenderer();
        return $twig->render('homepage.html', ["Session" => $_SESSION["id"]]);
    }else if(isset($_SESSION["failed"]) && ($_SESSION["failed"] == "mdp" || $_SESSION["failed"] == "user")){
        $twig = getRenderer();
        if ($_SESSION["failed"] == "mdp") {
            return $twig->render('homepage.html', ["Failed" => "mdp"]);
        } elseif ($_SESSION["failed"] == "user") {
            return $twig->render('homepage.html', ["Failed" => "user"]);
        }
        $_SESSION["failed"] = false;

    }else{
        $twig = getRenderer();
        return $twig->render('homepage.html');
    }
}


?>
