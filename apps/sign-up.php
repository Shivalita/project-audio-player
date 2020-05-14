<?php

include_once '../partials/start-session.php';
include_once '../partials/connection.php';

/* --- GET DATA --- */

/* Get post data and store it in variables */
if (!empty($_POST['nickname']) && !empty($_POST['password'])) {
    $cleanNickname = cleanData($_POST['nickname']);
    $nickname = htmlspecialchars($cleanNickname);
    $password = cleanData($_POST['password']);
} else {
    header('location: ../index.php');
}

/* Remove data spaces and backslashs */
function cleanData($data) {
    $data = stripslashes($data);
    $data = trim($data);
    return $data;
}

/* Check file extension and size, and if upload has no error before storage */
if (!empty($_FILES['avatar']) AND $_FILES['avatar']['error'] == 0) {
    if ($_FILES['avatar']['size'] <= 1000000) {
        $infosfichier = pathinfo($_FILES['avatar']['name']);
        $extension_upload = $infosfichier['extension'];
        $extensions_autorisees = array('jpg', 'jpeg', 'gif', 'png');
        if (in_array($extension_upload, $extensions_autorisees)) {
            $file=$_FILES['avatar'];
            $contentFile = file_get_contents($file['tmp_name']);
            $avatar = '../uploads/'.$nickname.'.'.$extension_upload;
            file_put_contents($avatar, $contentFile);
        } else {
            header('location: ../index.php?wrong_extension');
        }
    } else {
        header('location: ../index.php?file_size');
    }
} else {
    /* Assign a default avatar if not added */
    $avatar = '../uploads/Toto.jpg';
}


/* --- SET DATA --- */

/* Check in database if user already exists */
function getUser($nickname) {
    global $database;
    $userQuery = $database->prepare("SELECT * from users WHERE nickname = ?");
    $userQuery->execute(array($nickname));
    $user = $userQuery->fetch(PDO::FETCH_ASSOC);
    return $user;
}

$user = getUser($nickname);

if ($user) {
    header('location: ../index.php?nickname_taken');
} else {
    global $avatar;
    /* Insert new user in database */
    $newUserRequest = $database->prepare(' INSERT INTO users(nickname, password, avatar) 
    VALUES(:nickname, :password, :avatar) ');

    $newUserRequest->execute(array(
        'nickname' => $nickname,
        'password' => $password,
        'avatar' => $avatar
    ));

    /* Store the user id */
    $user = getUser($nickname);
    $userId = $user['id'];
    include_once '../apps/session.php';

    header('location: ../index.php');
}
?>
