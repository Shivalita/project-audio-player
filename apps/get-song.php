<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

/* Get song and return song's link */
if (isset($_POST['songName'])) {
    $songName = $_POST['songName'];

    $songQuery = $database->prepare('SELECT * FROM songs WHERE title = ?');
    $songQuery->execute([$songName]);
    $song = $songQuery->fetch(PDO::FETCH_ASSOC);

    $songLink = $song['link'];

    echo ($songLink);
}
?>