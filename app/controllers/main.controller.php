<?php
namespace Controllers;

use function Helpers\getRenderer;
use function Models\getAllNotifs;


function getMainController()
{
    if (isset($_GET['page'])) {
        switch ($_GET['page']) {
            case 'inscription':
                getInscriptionController();
                break;
            default:
                getHomepageController();
                break;
        }
    } else if (isset($_POST["page"])) {
        switch ($_POST["page"]) {
            case 'questionnaire':
                echo \Helpers\getRenderer()->render("questionnaire.html");
                break;
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
