<?php
namespace Controllers;

use function Helpers\getRenderer;
use function Models\getAllNotifs;


function getMainController()
{
    if (isset($_GET['page'])) {
        switch ($_GET['page']) {
            default:
                echo \Helpers\getRenderer()->render("homepage.html");
                break;
        }
    } else if (isset($_POST["page"])) {
        switch ($_POST["page"]) {
            case 'questionnaire':
                echo \Helpers\getRenderer()->render("questionnaire.html");
                break;
            default:
                echo \Helpers\getRenderer()->render("homepage.html");
                break;
    } else {
        echo \Helpers\getRenderer()->render("homepage.html");

    }
}
