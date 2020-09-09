<?php
namespace Controllers;

use function Helpers\getRenderer;


function getMainController()
{
    if (isset($_GET['page'])) {
        switch ($_GET['page']) {
            case 'inscription':
                getInscriptionController();
                break;
            case 'accueil':
                getHomepageController();
                break;
            case 'questionnaire':
                if(isset($_SESSION["id"])) {
                    echo \Helpers\getRenderer()->render("questionnaire.html", ["Session" => $_SESSION["id"]]);
                } else {
                    echo \Helpers\getRenderer()->render("questionnaire.html");
                }
                break;
            case 'contact':
                echo \Helpers\getRenderer()->render("contact.html");
                break;
            default:
                getHomepageController();
                break;
        }
    } else if (isset($_POST["page"])) {
        switch ($_POST["page"]) {
            case "inscription.model":
                \Models\setUser($_POST["Email"], $_POST["Password"]);
                break;
            case "inscription":
                getInscriptionController();
                break;
            case "connexion":
                getLoginController();
                break;
            case "deconnexion":
                session_destroy();
                break;
            default:
                getHomepageController();
                break;
        }
    } else {
        getHomepageController();

    }
}
