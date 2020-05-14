<?php
if ($_SESSION) {
$_SESSION = array();
session_destroy();
header('Location: ../index.php');
}
?>