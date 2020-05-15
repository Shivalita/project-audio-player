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

        <?php include './partials/sign-modals.php';?>

        <div class="container-fluid" id="container">

            <span id="spanAppearBtn" class="d-block d-sm-block d-md-none">
                <button type="button" id="appearBtn" class="btn btn-dark">Appear!</button>
            </span>
            
            <div class="row" id="row1">
                <aside class="d-none d-md-block col-2" id="side">
                    <?php include './partials/sign-or-profile.php';?>
                    <?php include './partials/search-bar.php'; ?>
                    <?php include './partials/disconnect-btn.php';?>
                </aside>

                <div class="col-12 col-md-10" id="main">
                    <div id="tabs" class="d-flex">
                        <a href="index.php#now-playing">Now playing</a>
                        <a href="index.php#comments">Comments</a>
                        <a href="index.php#popular-playlists">Popular playlists</a>
                        <a href="index.php#new-releases">New releases</a>
                    </div>
                    <div id="content">
                        <?php include_once './partials/default-text.php';?>
                    </div>
                </div>
            </div>
            
            <div class="row" id="row2">
                <section class="col-12" id="playerSection">
                    <div class="row">
                        <div class="d-none d-md-block col-md-2" id="prev">
                            <?php include './partials/prevDiv.php'; ?>
                        </div>
                        <div class="col-md-8">
                            <?php include_once './partials/player.php';?>
                        </div>
                        <div class="d-none d-md-block col-md-2" id="next">
                            <?php include './partials/nextDiv.php'; ?>
                        </div>
                    </div>
                </section>
            </div>

        </div>
  
    

        <?php
        include_once './partials/script.php';
        ?>

    </body>
</html>