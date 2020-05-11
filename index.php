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

            <div class="row" id="row1">
                <span><i class="fas fa-chevron-circle-right"></i></span>
                <aside class="col-12 col-md-2" id="side">
                    <p>Here's our aside, which contains our user's menu and our search bar</p>
                </aside>
                <div class="col-12 col-md-10" id="main">
                    <p>Here's our main div, which display the content of our four tabs</p>
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