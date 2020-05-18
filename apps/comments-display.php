<?php
include_once '../partials/connection.php';
include_once '../partials/start-session.php';

$commentsQuery = $database->query('SELECT * from comments INNER JOIN users ON comments.user_id = users.id  ORDER BY comments.created_at');
$comments = $commentsQuery->fetchAll(PDO::FETCH_ASSOC);

$commentsCount = 0;

foreach ($comments as $comment) {
    if ($comment['song_id'] === $_SESSION['songId']) {
        echo ('<div class="col-12 text-white comment mb-5">');
            echo ($comment['created_at'].' - <b class="text-white">'.$comment['nickname'].'</b> : '.$comment['comment'].'<br>');
        echo ('</div>
        ');
        $commentsCount++;
    } 
} 

if ($commentsCount === 0) {
    echo ('
        <div class="row justify-content-center text-center mt-4">
            <div id="noCommentsYet" class="col-12 mb-5">
                <h2 class="my-5"><b class="text-white">This song hasn\'t been commented yet<b></h2>
                <h4 class="text-white my-4">Be the first one to share thoughts and feelings about this song</h4>
            </div>
        </div>
    ');
}


if (!isset($_SESSION['nickname'])) {
    echo (' 
        <div class="row justify-content-center text-center mt-5">
            <div id="signForComment" class="col-12">
                <h2 class="my-5"><b class="text-white">Join us to comment<b></h2>
                <h4 class="text-white mt-4">Sign up or log in to share about this song</h4>
            </div>
        </div>
        ');
} else if ($_SESSION['songId']) {
    include_once 'comment-form.php';
}

// echo ('</div>');
