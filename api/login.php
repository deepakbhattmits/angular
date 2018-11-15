<?php
$getData = file_get_contents("php://input");
$request = json_decode($getData);
include "connection.php";
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
// print_r($request->params);die();
$data = $request->params;
$uname = $data->uname;
$pwd = $data->pwd;
// echo "CHECK : ".$uname.' and '.$pwd;die();
$sql = "SELECT * FROM users WHERE username = '".$uname."' AND password = '".$pwd."'";
$result = mysqli_query($link,$sql);
if($result) {
  while($rows = mysqli_fetch_assoc($result)){
  	$resp[] = array(
  							'id' => $rows['id'],
  							'FirstName' => $rows['FirstName'],
  							'LastName'=> $rows['LastName'],
  							'username'=> $rows['username']
  						);
  }
} else {
  $resp[] = array(
              'msg' => 'user not found'
            );
}

echo json_encode($resp);
mysqli_close($link);
?>
