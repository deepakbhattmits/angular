<?php 
$errors = array();
$data = array();
$status = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);
// response back.
$fname = $_POST['fn'];
$lname = $_POST['ln'];
$htown = $_POST['ht'];
$job   = $_POST['job'];
$age   = $_POST['age'];
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql = "INSERT INTO student (FirstName,LastName,HomeTown,Job,Age) VALUES  ('".$fname."','".$lname."','".$htown."','".$job."','".$age."')";
$res = mysqli_query($link,$sql);
if ($res) {
  $status['success'] = "Record Submitted Successfully";

} else {
    $status['error'] = "Error: " . $sql . "<br>" . $link->error;
}
echo json_encode($status);
mysqli_close($link);
?>