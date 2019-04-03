<?php
//get the informatie for the DB
require_once("inc/settings.php");
//Connect to DB
$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

//Retrieve all numbers
$query = 'SELECT *
          FROM book';

$result = mysqli_query($mysqli, $query);

//Loop through the result to create a custom array
/** @var lists $lists */
$lists = [];
while ($row = mysqli_fetch_assoc($result)) {
    $lists[] = $row;
}

//Close connection
mysqli_close($mysqli);
//loop trough the information
foreach ($lists as $list) {
    $list['number'];

    //how long is the array?
   $numberLenght = count($lists);
   //look if there is something in the array
   if ($numberLenght > 0){
       //Redirect pagina naar video
       header("Location: http://localhost/magicBook/pages/". ($list['number']) . ".html");
       die();
   }
   //doe anders niks
   else{
       header("Location: http://localhost/magicBook/index.php");
   }
}