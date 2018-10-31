<?php 
$getData = file_get_contents("php://input");
$request = json_decode($getData);

$data = isset($request->FirstName) && !empty($request->FirstName)?$request->FirstName : "";

//$data = $_POST['FirstName'];
//echo $data;
$all_data_selected = array(); 
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql = "SELECT * FROM student WHERE FirstName = '".$data."'";
$result = mysqli_query($link,$sql);
//$i = 0;
while($row = mysqli_fetch_assoc($result)){
	$all_data_selected[] = $row;
	//$i++;
}
echo json_encode($all_data_selected);
mysqli_close($link);
?>