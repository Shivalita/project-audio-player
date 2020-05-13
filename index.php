<?php
include_once './partials/start-session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    include_once './partials/head.php';
    ?>
    <title>Index</title>
</head>
    <body>

        <div class="container-fluid" id="container">

            <span id="spanAppearBtn"><button type="button" id="appearBtn" class="btn btn-dark">Appear!</button></span>

            <div class="row" id="row1">
                <aside class="col-md-2" id="side">
                    <p>Here's our aside, which contains our user's menu and our search bar</p>
                    <?php include './partials/search-bar.php'; ?>
                </aside>
                <div class="col-12 col-md-10" id="main">
                </div>
            </div>
            
            <div class="row" id="row2">
                <section class="col-12" id="player">
                    <p>Player temporaire pour tester :</p>
                    <audio controls="controls" id="audioPlayer">
                        <source src="https://cdns-preview-1.dzcdn.net/stream/c-179888dacdd6a28871ead1caebf86c79-3.mp3">
                    </audio>
                </section>
            </div>

        </div>
  
    

        <?php
        include_once './partials/script.php';
        ?>

    </body>
</html>