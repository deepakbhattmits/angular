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
    }else{
        $sql = "SELECT * FROM student";
        $result = mysqli_query($link,$sql);
        while($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }
        echo json_encode($data);
    }




