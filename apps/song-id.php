<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

if (isset($_POST['songId'])) {
    $_SESSION['songId'] = $_POST['songId'];

    echo ($_SESSION['songId']);
}