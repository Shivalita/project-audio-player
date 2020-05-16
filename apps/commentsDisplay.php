<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

$songId = $_SESSION['songId'];

$commentsQuery = $database->query('SELECT * from comments INNER JOIN users ON comments.user_id = users.id  ORDER BY comments.created_at DESC LIMIT 10');
$comments = $commentsQuery->fetchAll(PDO::FETCH_ASSOC);

if ($comments['song_id'] === $songId) {
    foreach ($comments as $comment) {
        echo ($comment['created_at'].' - '.$users['nickname'].' : '.$comment['comment']);
    }
}

