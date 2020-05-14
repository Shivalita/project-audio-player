<?php
include_once '../partials/connection.php';

//check that artist doesn't already exist
global $database;
$artistVerif = $database->prepare('SELECT * FROM artists WHERE name = ?');
$artistVerif->execute([$_POST['artistName']]);
$artistExists = $artistVerif->fetch(PDO::FETCH_ASSOC);

if (!$artistExists) {
    addArtist();
}

$getLastArtist = $database->query('SELECT artists.id FROM artists ORDER BY id DESC LIMIT 1');
$LastArtist = $getLastArtist->fetch(PDO::FETCH_ASSOC);
$artistId = $LastArtist['id'];
$artistId = (int)$artistId;

//check that album doesn't already exist
global $database;
$albumVerif = $database->prepare('SELECT * FROM albums WHERE album_title = ?');
$albumVerif->execute([$_POST['albumTitle']]);
$albumExists = $albumVerif->fetch(PDO::FETCH_ASSOC);

if (!$albumExists) {
    global $artistId;
    addAlbum();
}

$getLastAlbum = $database->query('SELECT albums.id FROM albums ORDER BY id DESC LIMIT 1');
$lastAlbum = $getLastAlbum->fetch(PDO::FETCH_ASSOC);
$albumId = $lastAlbum['id'];
$albumId = (int)$albumId;

//check that song doesn't already exist
global $database;
$songVerif = $database->prepare('SELECT * FROM songs WHERE title = ?');
$songVerif->execute([$_POST['title']]);
$songExists = $songVerif->fetch(PDO::FETCH_ASSOC);

if (!$songExists) {
    addSong();
}

function addArtist() {
        global $database;
    $insertArtist = $database->prepare('INSERT INTO artists SET name = :name');
    $insertArtist->execute(array(
                "name" => $_POST['artistName']
            ));
}

function addAlbum() {
        global $database;
        global $artistId;
    $insertAlbum = $database->prepare('INSERT INTO albums SET album_title = :album_title, artist_id = :artist_id, album_image = :album_image');
    $insertAlbum->execute(array(
                "album_title" => $_POST['albumTitle'],
                "artist_id" => $artistId,
                "album_image" => $_POST['albumCover']
            ));
}

function addSong() {
        global $database;
        global $artistId;
        global $albumId;
    $insertSong = $database->prepare('INSERT INTO songs SET title = :title, artist_id = :artist_id, album_id = :album_id, link = :link');
    $insertSong->execute(array(
                "title" => $_POST['title'],
                "artist_id" => $artistId,
                "album_id" => $albumId,
                "link" => $_POST['link']
            ));
}
?>