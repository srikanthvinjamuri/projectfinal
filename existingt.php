
<?php
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

  
  

$data = json_decode(file_get_contents("php://input"));
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "task";
$conn = new mysqli($servername, $username, $password, $dbname);



       
        
        
        
        
$sql = "SELECT *FROM taskdetails";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row

     $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);

$conn->close();
?>

