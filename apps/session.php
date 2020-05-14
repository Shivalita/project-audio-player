<?php

include_once './partials/start-session.php';
include_once './partials/connection.php';

$_SESSION['nickname'] = $nickname;
$_SESSION['avatar'] = $avatar;
$_SESSION['userId'] = $userId;
?>