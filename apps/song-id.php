<?php
include_once './partials/connection.php';

$songId = file_get_contents('php://input');
echo ('<p>'.$songId.'</p>');