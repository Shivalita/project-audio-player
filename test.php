<?php
include_once './partials/start-session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    include_once './partials/head.php';
    ?>
    <title>Zut</title>
</head>
    <body>

    <form action='' method='POST' id="searchForm">
        <div>
            <label for='search'>Search for a song, an artist, an album or a playlist :</label>
            <input type='textarea' name='search' id="search" class="my-1">
        </div>
        <div>
            <input type='submit' id="searchBtn" value='Search' class="my-1">
        </div>
    </form>

    <div id="content" class="d-flex"></div>


    <script src="./js/test.js"></script>

    </body>
</html>