<?php
//get the informatie for the DB
require_once("inc/settings.php");
//Connect to DB
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//Retrieve all numbers
$query = 'DELETE FROM book';

$result = mysqli_query($mysqli, $query);

if ($mysqli->query($query) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $mysqli->error;
}

//Redirect pagina naar video
header("Location: http://localhost/magicBook/video.php");

$mysqli->close();