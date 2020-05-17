<?php
// Display "add to playlist" button if user is logged in
if (isset($_SESSION['nickname'])) {
    echo ('<button id="addPlaylistBtn" class="btn btn-sm control text-white mt-5">Add to playlist</button>');
}