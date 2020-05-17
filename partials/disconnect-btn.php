<?php
    if (isset($_SESSION['nickname'])) {
        echo ('
            <div id="disconnectBtn" class="my-1">
                <div class="text-center">
                    <a href="./apps/disconnect.php" class="btn btn-sm btn-outline-danger">Disconnect</a>
                </div>
            </div> 
        ');
    }
?>
            




