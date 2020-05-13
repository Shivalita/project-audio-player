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
        <?php include_once './partials/sign-modals.php';?>
        <div class="container-fluid" id="container">

            <span><button id="appearBtn" type="button" class="btn btn-dark">Appear!</button></span>

            <div class="row" id="row1">
                <aside class="col-md-2" id="side">
                    <?php include_once './partials/sign-or-profile.php';?>
                    <?php include './partials/search-bar.php'; ?>
                    <?php include_once './partials/disconnect-btn.php';?>
                </aside>
                <div class="col-12 col-md-10" id="main">
                    <?php include_once './partials/welcome-text.php';?>
                </div>
            </div>
            
            <div class="row" id="row2">
                <section class="col-12" id="player">
                    <p>Here's our player section, which contains all you need to listen to music</p>
                </section>
            </div>

        </div>
  
    

        <?php
        include_once './partials/script.php';
        ?>

    </body>
</html>