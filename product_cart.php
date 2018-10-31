<?php 
$errors = array();
$data = array(); 
$status = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);

// response back.
$pid = $_POST['id'];
$productname = $_POST['name'];
$price = $_POST['price'];
$quantity = $_POST['qty'];
$uprice = $_POST['uprice'];
$stock = $_POST['stock'];
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, "utf8");
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql = "INSERT INTO carttable (Pid,ProductName,ProductPrice,ProductQuantity,UpdatedPrice) VALUES  ('".$pid."','".$productname."','".$price."','".$quantity."','".$uprice."')";
$res = mysqli_query($link,$sql);
$sql1 = "UPDATE product SET stock = '".$stock."' WHERE id = '".$pid."'";
$res1 = mysqli_query($link,$sql1);
if ($res1) {
  $status['sucess'] = 'Product Added In your Cart';

} else {
    $status['error'] = "Error: " . $sql . "<br>" . $link->error;
}
echo json_encode($status);
mysqli_close($link);
?>