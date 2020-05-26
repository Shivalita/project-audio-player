<?php
    if (isset($_SESSION['nickname'])) {
        echo ('
            <div id="disconnectBtn" class="row justify-content-center text-center mt-5">
                <div class="col-5 mt-4">
                    <a href="./apps/disconnect.php" class="btn btn-sm btn-outline-danger">Logout</a>
                </div>
            </div> 
        ');
    }
?>
            




