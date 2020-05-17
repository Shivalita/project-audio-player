<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

/* Get song's link, search in database for his id and store it in session variable */
if (isset($_POST['link'])) {
    $songLink = $_POST['link'];

    $linkQuery = $database->prepare('SELECT * FROM songs WHERE link = ?');
    $linkQuery->execute([$songLink]);
    $song = $linkQuery->fetch(PDO::FETCH_ASSOC);

    $songId = $song['id'];
    $_SESSION['songId'] = $songId;

    /* Get song's title and artist with song's id */
    $songTitle = $song['title'];
    $songArtistId = $song['artist_id'];

    $artistQuery = $database->prepare('SELECT * FROM artists WHERE id = ?');
    $artistQuery->execute([$songArtistId]);
    $artist = $artistQuery->fetch(PDO::FETCH_ASSOC);

    $artistName = $artist['name'];

    echo ('<h5 class="text-white mb-4">'.$songTitle.' - '.$artistName.'</h5>');
}
?>