<?php
$errors = array();
$data = array();
$status = array();
$getData = file_get_contents("php://input");
$request = json_decode($getData);
// Getting posted data and decodeing json
// $_POST = json_decode(file_get_contents('php://input'), true);
// response back.
// $fname = $_GET['fname'];
// $lname = $_GET['lname'];
// $uname = $_GET['uname'];
// $pwd   = $_GET['pwd'];

$data = $request->params;
$fname = $data->fname;
$lname = $data->lname;
$uname = $data->uname;
$pwd = $data->pwd;


$fname = isset($fname) ? $fname : '';
$lname = isset($lname) ? $lname : '';
$uname = isset($uname) ? $uname : '';
$pwd = isset($pwd) ? $pwd : '';
$status = 'active';
//$link = mysqli_connect('localhost', 'root', '' ,'angdb');
// echo 'TEST DATA : '.$fname.'--'.$lname.'--'.$uname.'--'.$pwd;die();
include "connection.php";
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql_u = "SELECT * FROM users WHERE username='$uname'";
$res_u = mysqli_query($link, $sql_u);
if(mysqli_num_rows($res_u) > 0){
  $status['error'] = "UserName Already Taken ... ";
} else {
  $sql = "INSERT INTO users (username, FirstName, LastName, password, status) VALUES  ('".$uname."','".$fname."','".$lname."','".$pwd."','".$status."')";
  $res = mysqli_query($link,$sql);
  if ($res) {
    $status['success'] = "Record Submitted Successfully";

  } else {
      $status['error'] = "Error: " . $sql . "<br>" . $link->error;
  }
}
echo json_encode($status);
mysqli_close($link);
?>
