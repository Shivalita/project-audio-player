<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

$commentsQuery = $database->query('SELECT * from comments INNER JOIN users ON comments.user_id = users.id  ORDER BY comments.created_at');
$comments = $commentsQuery->fetchAll(PDO::FETCH_ASSOC);

$commentsCount = 0;

foreach ($comments as $comment) {
    if ($comment['song_id'] === $_SESSION['songId']) {
        echo (' 
            <div class="row justify-content-around mt-5">
                <div class="col-12 mb-4 text-white comment">');
                    echo ($comment['created_at'].' - <b class="text-white">'.$comment['nickname'].'</b> : '.$comment['comment'].'<br>');
                echo ('</div>
            <div class="row mt-5">
            <div class="container justify-content-around mt-5">
                <div class="row justify-content-around text-center">
        ');
        $commentsCount++;
    } 
} 

if ($commentsCount === 0) {
    echo ('
    <div class="row justify-content-around text-center mt-4">
        <div id="noCommentsYet" class="col-12 mb-5">
            <h2 class="my-5"><b class="text-white">This song hasn\'t been commented yet<b></h2>
            <h4 class="text-white my-4">Be the first one to share thoughts and feelings about this song</h4>
        </div>');
}


if (!isset($_SESSION['nickname'])) {
    echo (' 
            <div class="row justify-content-around text-center mt-5">
                <div id="signForComment" class="col-12">
                    <h2 class="my-5"><b class="text-white">Join us to comment<b></h2>
                    <h4 class="text-white mt-4">Sign up or log in to share about this song</h4>
                </div>
        ');
} else {
    include_once 'comment-form.php';
}

echo ('
    </div>
');
