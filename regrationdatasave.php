
<?php 
//$data = json_decode(file_get_contents("php://input"));  
//$username = $data->username;
//$gender = $data->gender;
//$bloodgroup = $data->bloodgroup;
//$number = $data->number;
//$weight = $data->weight;
//$age = $data->age;
//$city = $data->city;
//$area = $data->area;
//$email = $data->email;
//$password = $data->password;
//$conn = NEW mysqli("localhost","root","","bloodsystem");
// if($conn->connect_error){
//     die("Connection failed");
// }
//$passwordmd5=md5($password);
// $sql = "INSERT INTO user (name,gender,age,weight,blood,email,phone,city,area,password) VALUES ('$username', '$gender', '$age', '$weight','$bloodgroup','$email','$number','$city','$area','$passwordmd5')";
// if($conn->query($sql) == TRUE) {
//     echo "inserted succesfully";
// }
// else {
//     echo "error ". $conn->error;
// }
// 
// $conn->close();

$data = json_decode(file_get_contents("php://input"));  
$taskname = $data->taskname;
$date = $data->date;
$assignedto = $data->assignedto;
 echo("<script>console.log('PHP: ceck');</script>");
$conn = NEW mysqli("localhost","root","","task");
 if($conn->connect_error){
     die("Connection failed");
 }

//          echo "$latitude";
//          echo "$longitude";

 $sql = "INSERT INTO taskdetails (taskname,assignedto,date) VALUES ('$taskname', '$assignedto','$date')";
 if($conn->query($sql) == TRUE) {
     echo "inserted succesfully";
 }
 else {
     echo "error ". $conn->error;
 }
  
 $conn->close();






?>

