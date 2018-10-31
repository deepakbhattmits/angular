<?php 
$getData = file_get_contents("php://input");
$request = json_decode($getData);
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql = "SELECT * FROM student";
$result = mysqli_query($link,$sql);
while($rows = mysqli_fetch_assoc($result)){
	$resp[] = array(
							'id' => $rows['id'], 
							'FirstName' => $rows['FirstName'], 
							'LastName'=> $rows['LastName'], 
							'HomeTown'=> $rows['HomeTown'],
							'Job'=> $rows['Job'],
							'Age' => $rows['Age']
						);
}
echo json_encode($resp);
mysqli_close($link);
?>