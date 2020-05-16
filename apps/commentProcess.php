<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

if (!empty($_POST['comment'])) {
    $userId = (int)$_SESSION['userId'];
    $comment = $_POST['comment'];
    $songId = (int)$_SESSION['songId'];
   

    $newCommentQuery = $database->prepare('INSERT INTO comments(user_id, comment, song_id)
    VALUES(:user_id, :comment, :song_id)');

    $newCommentQuery->execute(array(
        'user_id' => $userId,
        'comment' => $comment,
        'song_id' => $songId
    ));

    header('location: ../index.php#comments');
}
?>