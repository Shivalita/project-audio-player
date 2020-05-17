<!-- included in div "content" -->
<?php
include_once './partials/start-session.php';

if (isset($_SESSION['nickname'])) {
    return `
    <div id="welcomeBack" class="text-center">
        <h2 class="my-5"><b>Welcome back `.$_SESSION['nickname'].` !<b></h2>
        <h4 class="mt-4">Have fun and good vibes !</h4>
    </div>
    `;
} else {
    return `
    <div id="signInvitation" class="text-center">
        <h2 class="my-5"><b>Sign up to enjoy all features<b></h2>
        <h4 class="mt-4">Create your own playlists and share them with the world</h4>
        <h4 class="mt-3">Leave comments and post your thoughts about your favorite songs</h4>
        <h4 class="mt-3">And more...</h4>
    </div> 
    `;
}
?>