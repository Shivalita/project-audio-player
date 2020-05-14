<?php
$dir = '../media';
$files = scandir($dir);

var_dump($files);
echo "</br>";
echo "</br>";

array_splice($files, 0, 2);
var_dump($files);
echo "</br>";
echo "</br>";

foreach($files as $file) {
    $absolute_path = realpath("../media/$file");
    print "Absolute path is: " . $absolute_path . "</br>";
}
?>