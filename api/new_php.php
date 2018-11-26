<?php
$getData = file_get_contents("php://input");
$request = json_decode($getData);
$resp = array();
include "connection.php";
// $link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql2 = "SELECT * FROM carttable";
$result2 = mysqli_query($link,$sql2);
 // echo 'TEST'.mysqli_fetch_assoc($result2);die();
while($rowc = mysqli_fetch_assoc($result2)){
	$resp[] = array(
							'id' => $rowc['Pid'],
							'name' => $rowc['ProductName'],
							'price'=> $rowc['ProductPrice'],
							'qty'=> $rowc['ProductQuantity'],
							'upprice'=> $rowc['UpdatedPrice']
						);
}
echo json_encode($resp);
mysqli_close($link);
?>
