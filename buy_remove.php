<?php 
$errors = array();
$data = array(); 
$status = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);
$type = $_POST['type'];
if( isset($type) && !empty( isset($type) ) ){	
	switch ($type) {
		case "remove":
			remove_prod();
			break;
		case "buy":
			buy_prod();
			break;
		default:
			invalidRequest();
	}
}else{
	invalidRequest();
}
function invalidRequest()
{
	$data = array();
	$data['success'] = false;
	$data['message'] = "Invalid Request.";
	echo json_encode($data);
	exit;
}
function remove_prod(){
	$pid = $_POST['id'];
	$link = mysqli_connect('localhost', 'root', '' ,'angdb');
	mysqli_set_charset($link, "utf8");
	if (!$link) {
	    die('Could not connect: ' . mysqli_error());
	}
		$sql1 = "DELETE FROM carttable WHERE Pid='".$pid."' ";
		$res1 = mysqli_query($link,$sql1); 
		$status['remove'] = 'your product  removed sucessfully from cart';
	echo json_encode($status);
	mysqli_close($link);
	}	
function buy_prod(){
	$pid = $_POST['id'];
	$productname = $_POST['name'];
	$price = $_POST['price'];
	$quantity = $_POST['qty'];
	$uprice = $_POST['uprice'];
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
	mysqli_set_charset($link, "utf8");
	if (!$link) {
	    die('Could not connect: ' . mysqli_error());
		}
		$sql = "INSERT INTO buytable (Pid,ProductName,ProductPrice,ProductQuantity,UpdatedPrice,status) VALUES  ('".$pid."','".$productname."','".$price."','".$quantity."','".$uprice."','Processing')";
		$res = mysqli_query($link,$sql);
		$sql1 = "DELETE FROM carttable WHERE Pid='".$pid."' ";
		$res1 = mysqli_query($link,$sql1); 
		if ($res && $res1) {
		  $status['buy'] = 'Order Processed';
		  $status['removecart'] = 'Product Remove From Cart';

		} else {
		    $status['error'] = "Error: " . $sql . "<br>" . $link->error;
		}
		echo json_encode($status);
		mysqli_close($link);
	}

?>