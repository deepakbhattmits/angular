<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 4/21/2016
 * Time: 3:15 PM
 */

//get the file from angularjs
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

//database settings
$link = mysqli_connect('localhost', 'root', '' ,'angdb');
mysqli_set_charset($link, 'utf8');

$id = isset($request->id) && !empty($request->id) ? $request->id :'';
$fname = isset($request->FirstName) && !empty($request->FirstName) ? $request->FirstName :'';
$lname = isset($request->LastName) && !empty($request->LastName) ? $request->LastName :'';
$htown = isset($request->HomeTown) && !empty($request->HomeTown) ? $request->HomeTown :'';
$job = isset($request->Job) && !empty($request->Job) ? $request->Job :'';
$age = isset($request->Age) && !empty($request->Age) ? $request->Age :'';
$queryType = isset($request->queryType) && !empty($request->queryType) ? $request->queryType :'';

$username = $request->username && !empty($request->username) ? $request->username :'';
$useremail = $request->useremail && !empty($request->useremail) ? $request->useremail :'';
$userenq = $request->userenq && !empty($request->userenq) ? $request->userenq :'';

//$respdata = array('id' => $id, 'username' => $username, 'useremail' => $useremail, 'userenq' => $userenq, 'queryType' => $queryType);
//echo json_encode($respdata);
//die();
    if($queryType == 'update'){
        $sql = "UPDATE student SET FirstName = '".$fname."',LastName = '".$lname."',HomeTown = '".$htown."',Job = '".$job."',Age = '".$age."' where id = '".$id."' ";
        if(mysqli_query($link, $sql)) {
            echo "one row updated successfully";
        }else {
            echo "error";
        }
    }else if($queryType == 'delete'){
        $sql = "delete from student  where id = '".$id."'";
        if(mysqli_query($link, $sql)) {
            echo "one row deleted successfully";
        }else {
            echo "error";
        }
    }else if($queryType == 'edit_select'){
        $sql = "SELECT * FROM student WHERE id = '".$id."'";
        $result = mysqli_query($link,$sql);
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
        echo json_encode($data);
    }
    else if($queryType == 'sendenq'){
        $sql = "INSERT INTO enquiry (id,Name,Email,Enquiry) VALUES  ('".$id."','".$username."','".$useremail."','".$userenq."')";
        $result = mysqli_query($link,$sql);
        if ($result) {
        $status['sucess'] = 'Successfully save';

        } else {
        $status['error'] = "Error: " . $sql . "<br>" . $link->error;
        }
        echo json_encode($status);
    }else{
        $sql = "SELECT * FROM student";
        $result = mysqli_query($link,$sql);
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
        echo json_encode($data);
    }
