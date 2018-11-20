<?php
$getData = file_get_contents("php://input");
$request = json_decode($getData);
include "connection.php";
// $link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
  $sql = "SELECT id, Name, Enquiry FROM enquiry";
  $result = mysqli_query($link,$sql);
  while($rows = mysqli_fetch_assoc($result)){
  	$resp[] = array(
  							'id' => $rows['id'],
  							'Name' => $rows['Name'],
  							'Enquiry' => $rows['Enquiry']
  						);
  }
// echo "test : ".$resp;
echo json_encode($resp);
mysqli_close($link);
?>
