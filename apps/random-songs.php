<?php
include_once '../partials/connection.php';

function random() {
    global $database;
    $req = $database->query('SELECT link FROM songs ORDER BY RAND ()');
    $randomSongs = $req->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($randomSongs);
}

random();
?>