<?php
    include_once '../partials/start-session.php';

    echo ('<div id="myCommentsContainer" class="mt-5 mb-4">');
        include_once "../apps/my-comments-display.php";
    echo ('</div>');
?>