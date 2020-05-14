<?php
include_once '../partials/connection.php';

if (!empty($_POST['comment'])) {
    echo $_POST['comment'];
}
?>