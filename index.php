<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html lang="en" ng-app="Demo">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js" ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.min.js" ></script>
<!--        <link href="CSS/style.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/animate.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/font-awesome.min.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/footer-distributed.css" rel="stylesheet" type="text/css"/>
        <link href="CSS/main.css" rel="stylesheet" type="text/css"/>-->
     
        <script src="js/script.js" type="text/javascript"></script>

         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
         <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header" style="height:150px;">
        
        <a class="navbar-brand" href="#" style="margin-top:50px;font-size:40px;"><b>Task Tracker<sub><b>V2.0</b></sub> </b></a>
<!--       <p class="navbar-brand" href="#"><bold> </bold></p>-->
    </div>
   
  </div>
</nav>
  
        <div class="col-sm-6 "  ng-controller="registercontroller" style="background-color: white; height: 495px " > 
    <h3 style="text-align: center"><b>Create a Task</b></h3> 
    <br>
    <div class="col-md-6 col-md-offset-3" style=" border-style: solid; border-color:#f8f8f8;"> 
           

<form name="form" ng-submit="regsubmit()">
       
       
        <div class="form-group">
            <label for="Hospitalname" >Task Name<span style="color: red"> *</span></label>
            <input type="text" style="background:#f8f8f8" name="taskName" id="hospitalname" ng-model="taskname" class="form-control" required pattern="^[A-Za-z ]+" /> 
        </div>
        <div class="form-group">
            <label for="Area" >Date<span style="color: red"> *</span></label>
            <input type="date" style="background:#f8f8f8" name="date" id="area" ng-model="date" class="form-control"  />
        </div>
            <div class="form-group">
            <label for="Area" >Assigned to<span style="color: red"> *</span></label>
            <input type="text" style="background:#f8f8f8" name="assignedto" id="area" ng-model="assignedto" class="form-control" required pattern="^[A-Za-z ]+" />
        </div>
            <div class="form-actions">
            <button type="submit" style="background:#625E5E"  class="btn btn-primary">Submit</button>
            </div>
        </form>

    </div>
    </div> 
   
    
           
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
    <style>
table, th , td  {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
table tr:nth-child(odd) {
  background-color: #f1f1f1;
}
table tr:nth-child(even) {
  background-color: #ffffff;
}
</style>
<div ng-app="Demo" class="col-sm-6 "  ng-controller="seekerController" ng-init="getDonors()">
<table class="table table-bordered" >
	<thead>
        <h3 style="color:#131111"><b>Existing Tasks </b></h3>
	<tr>
            <th>TaskName</th>
          <th>Assigned to</th>
         <th>Date</th>
<!--	  <th>Distance</th>
           <th>Duration</th>-->
	</tr>
	</thead>
	<tbody>
	<tr ng-repeat="donor in donors | filter:search">
	  <td>{{ donor.taskname }}</td> 
	  <td>{{ donor.assignedto }}</td>
          <td>{{ donor.date }}</td>
	  
<!--          <td>{{ donor.distance }}</td>
          <td>{{donor.duration}}</td>-->
	  <!--<td>--> 
<!--	    <a href="#/employees/{{user.id}}/show" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> Show  </a>-->
<!--	  	<a ng-click="deleteEmployee(user.id)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">go back </a>-->
	  <!--</td>-->
	</tr>
	</tbody>
</table>
</div>
<div>
    
    <br>
    <br>
    <br>
    <br>
    <br>
</div>





    </div>
    </div> 
     
  
           
  
  

</body>
</html>
