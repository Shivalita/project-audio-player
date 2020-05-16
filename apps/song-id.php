<?php
session_start();
include_once '../partials/connection.php';

/* Get song's link, search in database for his id and store it in session variable */
$songLink = $_POST['link'];

$linkQuery = $database->prepare('SELECT songs.id FROM songs WHERE link = ?');
$linkQuery->execute([$songLink]);
$songId = $linkQuery->fetch(PDO::FETCH_ASSOC);

$_SESSION['songId'] = $songId['id'];
?>