<?php
namespace Controllers;

use function Helpers\getRenderer;
use function Models\getAllNotifs;


function getMainController()
{
    if (isset($_GET['page'])) {
        switch ($_GET['page']) {
            default:
                break;
        }
    } else if (isset($_POST["page"])) {
        switch ($_POST["page"]) {
            default:
                break;
        }

    } /*else {
        // homepage

    }*/
}
