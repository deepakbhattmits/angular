<?php
$getData = file_get_contents("php://input");
$request = json_decode($getData);

// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);
include "connection.php";
$all_data_selected = array();
// $link = mysqli_connect('localhost', 'root', '' ,'angdb');

mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$username = $_GET['username'];
// echo $username;die();
$sql = "SELECT * FROM users WHERE username = '".$username."'";
$result = mysqli_query($link,$sql);
//$i = 0;
while($row = mysqli_fetch_assoc($result)){
	$all_data_selected[] = $row;
	//$i++;
}
// echo print_r($all_data_selected);
// echo json_encode($all_data_selected);
echo json_encode($all_data_selected);
mysqli_close($link);
?>
