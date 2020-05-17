<?php
include_once '../partials/connection.php';

if(!empty($_POST['prevLink'])) {
    $prevLink = ($_POST['prevLink']);

    function prevLink($prevLink) {
    global $database;
    $req = $database->prepare("SELECT songs.title, artists.name from songs INNER JOIN artists ON songs.artist_id = artists.id WHERE songs.link = ?");
    $req->execute([$prevLink]);
    $prevLink = $req->fetch(PDO::FETCH_ASSOC);
    echo json_encode($prevLink);
    };
    prevLink($prevLink);
}

if(!empty($_POST['prevCover'])) {
    $prevCover = ($_POST['prevCover']);

    function prevCover($prevCover) {
    global $database;
    $req = $database->prepare("SELECT songs.title, albums.album_image from songs INNER JOIN albums ON songs.album_id = albums.id WHERE songs.link = ?");
    $req->execute([$prevCover]);
    $prevCover = $req->fetch(PDO::FETCH_ASSOC);
    echo json_encode($prevCover);
    };
    prevCover($prevCover);
}

if(!empty($_POST['nextLink'])) {
    $nextLink = ($_POST['nextLink']);

    function nextLink($nextLink) {
    global $database;
    $req = $database->prepare("SELECT songs.title, artists.name from songs INNER JOIN artists ON songs.artist_id = artists.id WHERE songs.link = ?");
    $req->execute([$nextLink]);
    $nextLink = $req->fetch(PDO::FETCH_ASSOC);
    echo json_encode($nextLink);
    };
    nextLink($nextLink);
}

if(!empty($_POST['nextCover'])) {
    $nextCover = ($_POST['nextCover']);

    function nextCover($nextCover) {
    global $database;
    $req = $database->prepare("SELECT songs.title, albums.album_image from songs INNER JOIN albums ON songs.album_id = albums.id WHERE songs.link = ?");
    $req->execute([$nextCover]);
    $nextCover = $req->fetch(PDO::FETCH_ASSOC);
    echo json_encode($nextCover);
    };
    nextCover($nextCover);
}
?>