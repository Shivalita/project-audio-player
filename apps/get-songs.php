<?php
include_once '../partials/connection.php';

if(isset($_GET['random'])) {
    random();
}

function random() {
    global $database;
    $req = $database->query('SELECT link FROM songs');
    $randomSongs = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($randomSongs);
}

?>