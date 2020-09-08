<?php
namespace Helpers;
$dotenv = new \Symfony\Component\Dotenv\Dotenv();
$dotenv->load(__DIR__.'/../../db.env');
define("HOST", $_ENV['LOCAL_DB_HOST']);
define("DB_NAME", $_ENV['LOCAL_DB_NAME']);
define("USER", $_ENV['LOCAL_DB_USER']);
define("PASSWORD", $_ENV['LOCAL_DB_PASS']);
use PDO;
use PDOException;
function getDatabaseConnection()
{
    try {
        $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $db->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ATTR_ERRMODE);
        return $db;
    } catch (PDOException $e) {

        return $e;
    }
}
?>
