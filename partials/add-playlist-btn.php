<?php
// Display "add to playlist" button if user is logged in
if ($_SESSION) {
    echo '<button id="addPlaylistBtn" class="btn btn-sm btn-outline-secondary">Add to playlist</button>';
}

