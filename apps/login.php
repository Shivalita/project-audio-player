<?php
include_once '../partials/start-session.php';
include_once '../partials/connection.php';

/* Get post data and store it in variables */
if (!empty($_POST['nickname']) && !empty($_POST['password'])) {
    $cleanNickname = cleanData($_POST['nickname']);
    $nickname = htmlspecialchars($cleanNickname);
    $password = cleanData($_POST['password']);
} else {
    header('location: ../index.php'); // Change url (renseigner les champs)
}

/* Remove data spaces and backslashs */
function cleanData($data) {
    $data = stripslashes($data);
    $data = trim($data);  // FIX THIS
    return $data;
}

/* Check in database if user exists */
$userQuery = $database->query("SELECT * FROM users WHERE nickname = '".$_POST['nickname']."'");
$user = $userQuery->fetch();

if (!$user) {
    header('location: ../index.php?unknown_user');
} else {
    /* Check if nickname and password are correct*/
    if (($nickname == $user['nickname']) && ($password == $user['password'])) {
        /* Store the user id */
        $userId = $user['id'];
        $avatar = $user['avatar'];
    include_once '../apps/session.php';
    header('location: ../index.php');
    } else {
        header('location: ../index.php?wrong_identifiers');
    }
}
?>