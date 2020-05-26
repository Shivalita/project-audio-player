<!-- included in div "content" -->
<?php
include_once './partials/start-session.php';

if (isset($_SESSION['nickname'])) {
    echo ('
        <div id="welcomeBack" class="col-12 col-md-5 text-center cardText">
            <h3 class="mt-3 mb-4"><b class="text-white">Welcome back '.$_SESSION['nickname'].'<b></h3>
            <h5 class="my-3">Have fun and good vibes !</h5>
        </div>
    ');
} else {
    echo ('
        <div id="signInvitation" class="col-12 col-md-5 text-center cardText">
            <h3 class="mt-3 mb-4"><b class="text-white">Sign up to enjoy all features<b></h3>
            <h5 class="mt-3">Create your own playlists and share them with the world</h5>
            <h5 class="mt-3">Leave comments about your favorite songs</h5>
            <h5 class="my-3">And more...</h5>
        </div> 
    ');
}
?>

