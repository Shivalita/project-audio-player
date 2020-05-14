<?php
include_once './partials/start-session.php';
include_once './apps/sessionVar.php';
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

        <?php include './partials/sign-modals.php';?>

        <div class="container-fluid" id="container">

            <span id="spanAppearBtn"><button type="button" id="appearBtn" class="btn btn-dark">Appear!</button></span>
<<<<<<< HEAD

=======
            
>>>>>>> 3fe1d502a323fa854807dd3a9296be45b4e866b7
            <div class="row" id="row1">
                <aside class="col-md-2" id="side">
                    <?php include './partials/sign-or-profile.php';?>
                    <?php include './partials/search-bar.php'; ?>
                    <?php include './partials/disconnect-btn.php';?>
                </aside>
                <div class="col-12 col-md-10" id="main">
<<<<<<< HEAD
                    <?php include_once './partials/welcome-text.php';?>
=======
                    <div id="content">
                        <div id="tabs" class="d-flex">
                            <a href="index.php?now-playing">Now playing</a>
                            <a href="index.php?comments">Comments</a>
                            <a href="index.php?popular-playlists">Popular playlists</a>
                            <a href="index.php?new-releases">New releases</a>
                        </div>
                        <?php include_once './partials/default-text.php';?>
                    </div>
>>>>>>> 3fe1d502a323fa854807dd3a9296be45b4e866b7
                </div>
            </div>
            
            <div class="row" id="row2">
                <section class="col-12" id="playerSection">
                    <?php include_once './partials/player.php';?>
                </section>
            </div>

        </div>
  
    

        <?php
        include_once './partials/script.php';
        ?>

    </body>
</html>