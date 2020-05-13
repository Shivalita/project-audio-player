<?php
include_once '../partials/connection.php';

$data = file_get_contents('php://input');


if(array_key_exists("artist", $_GET)) {
    echo 'artist existe';
}

function dumpArray(array $nested_arrays): void
{
    foreach ($nested_arrays as $key => $value) {
        if (gettype($value) !== 'array') {
            echo ('<li style="margin-left: 2rem;color: teal; background-color: white">'
                . '<span style="color : steelblue;font-weight : bold;">'
                . $key . '</span> : '
                . $value . '</li>');
        } else {
            /* ignore same level recursion */
            if ($nested_arrays !== $value) {
                echo ('<details><summary style="color : tomato; font-weight : bold;">'
                    . $key . '<span style="color : steelblue;font-weight : 100;"> ('
                    . count($value) . ')</span>'
                    . '</summary><ul style="font-size: 0.75rem; background-color: ghostwhite">');
                dumpArray($value);
                echo ('</ul></details>');
            }
        }
    }
}
dumpArray($GLOBALS);

// function addArtist() {
//     if(!empty($_POST['nickname'])) {
//         global $database;
//     $insertMessage = $database->prepare('INSERT INTO messages SET user_id = :user_id, message = :message, ip_address = :ip_address, created_at = NOW()');
//     $insertMessage->execute(array(
//                 "user_id" => $userId,
//                 "message" => $message,
//                 "ip_address" => getIp()
//             ));
//     }
// }



?>

