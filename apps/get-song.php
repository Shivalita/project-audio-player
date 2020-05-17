<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

/* Get song and return song's link */
if (isset($_SESSION['songId'])) {
    $songId = $_SESSION['songId'];

    $songQuery = $database->prepare('SELECT * FROM songs WHERE id = ?');
    $songQuery->execute([$songId]);
    $song = $songQuery->fetch(PDO::FETCH_ASSOC);

    /* Get song's title and artist with song's id */
    $songLink = $song['link'];

    echo ($songLink);
}
?>