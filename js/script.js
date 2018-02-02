/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/// [reference path="angular.min.js" /]

var app = angular.module("Demo", ["ngRoute"]); 
        app.config(function ($routeProvider) {
            $routeProvider 
//            .when("/",
//           { templateUrl: "html/existingtasks.html",
//           
//     })
         
           .when("/register",
               { 
                controller: "registercontroller" })
          

    .when("/seekerdashboard", {
		
               controller: "seekerController" 
		
	})
	


});



  app.factory("myService", function() {
    var theValue = {};
    theValue.setter = function(newValue) {
        theValue.value = newValue;
    }
    theValue.getter = function() {
        return theValue.value;
    }
    return theValue;
});   
// app.controller('HeaderCtrl', function($scope, $location) {
//    $scope.$on('$locationChangeSuccess', function(/* EDIT: remove params for jshint */) {
//        var path = $location.path();
//        //EDIT: cope with other path
//        $scope.templateUrl = (path==='/userdashboard') ? 'html/navbar.html' :  'html/navbar.php';
//    });
//})
   
  
    app.controller('registercontroller',function($scope,$http,$location,$route,$window){	
    $scope.regsubmit=function(){
        console.log("comesdfss");
    $http.post("regrationdatasave.php", {
		'taskname':$scope.taskname,
                'date':$scope.date,
                'assignedto':$scope.assignedto
                })
    
    .success(function(data){
              //  document.getElementById("message").textContent = "You have registered successfully";
                alert("You have added tast sucessfuly");
                $window.location.reload();
      
    });
        }
         }); 
   
   
//    app.controller('loginCtrl',function($scope,$location,$http,$window,myService,$route){
//    $scope.submit =function(){
//        var username=$scope.username;
//        var pass=$scope.password;
//        
//        var request=$http.post("session.php",{
//            'username':$scope.username,
//            'password':$scope.password
//        },{ headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
//          request.success(function(data)
//           {
//          var i=data;
//          console.log(i);
//              if(i == 1){
//                   console.log("In 21");
//                   if(username ==='sreeh@gmail.com' &&  pass==='high'){
//                        $location.path('/dashboard');
//                        $window.location.reload();
//                    }
//                    else{
//                              $scope.myVar = false;
//                              $scope.myVar = !$scope.myVar;
//                           console.log("In 0as");
//                         myService.setter(username);
//                        $location.path('/userdashboard');
////                          $window.location.reload();
//
//$route.reload();
//                    }
//               }
//               else{
//                 console.log("In 0");
//                   $scope.responseMessage = "Username or Password is incorrect";
//            }  
//
//            });
//        }  
//    });
//  

//app.controller('searchbloodcontroller',function($scope,$http,$location,myService){
// $scope.showDonors=function(){
//    var address =$scope.blood+" ,"+$scope.hospital+", "+$scope.area+", "+$scope.city;
//   
// myService.setter(address);
//    $location.path('/seekerdashboard');
// };
//});


app.controller('seekerController',function($scope,$http,$location,myService){
 $scope.getDonors=function(){
      console.log("comingtoexisting");

       
 $http.post("existingt.php")
            .then(function(response){
               
//                  var json=response.data;  
//          
//                  for(var i = 0; i < json.length; i++) {
//                    var data= json[i];
//                    var donoraddr=data.area+","+city;
//                    console.log(getDistance(seekaddr,donoraddr));
//                        json[i].distance =getDistance(seekaddr,donoraddr);
//                        
//                    }
//                
             
              $scope.donors=response.data;
          
        
    }); 
            
 };
});


  app.controller('empController',function($scope,$http,$routeParams,myService,$location){
	

    $scope.getEmployees = function(){


   var user =  myService.getter();
           $http.post('api/select.php',{'username':user})
                       .then(function(response){
                                console.log(response.data);
			$scope.users = response.data;
		});           
	};
	
	$scope.showEmployee = function(){
		var id = $routeParams.id;
		$http.post('api/selectone.php',{'id':id}).then(function(response){
			var emp  = response.data;
			$scope.user= emp[0];
		});
	};
	$scope.updateEmployee = function(info){
		$http.post('api/update.php', info).then(function(response){
//			window.location.href ='http://localhost/finalbloodproject/index.php#/userdashboard';
                        $location.path("/userdashboard");
		});
	};
	$scope.deleteEmployee = function(id){
		var id = id;
		$http.post('api/delete.php',{'id':id}).then(function(response){
//			$route.reload();
//window.location.href = 'http://localhost/updatemodify/client/index.html#/';
 $location.path('/');
		});
	};

});
  
      
  


       
app.controller("userController", function($scope,$http){
    $scope.users = [];
    $scope.tempUserData = {};
    // function to get records from the database
    $scope.getRecords = function(){
        $http.get('action.php', {
            params:{
                'type':'view'
            }
        }).success(function(response){
            if(response.status == 'OK'){
                $scope.users = response.records;
            }
        });
    };
    
      $scope.message = function(){
        $http.post("Donarmsg.php")
    };
    
    
    // function to insert or update user data to the database
    $scope.saveUser = function(type){
        var data = $.param({
            'data':$scope.tempUserData,
            'type':type
        });
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        $http.post("action.php", data, config).success(function(response){
            if(response.status == 'OK'){
                if(type == 'edit'){
                         $scope.users[$scope.index].id = $scope.tempUserData.id;
                         $scope.users[$scope.index].name = $scope.tempUserData.name;
                         $scope.users[$scope.index].gender = $scope.tempUserData.gender;
                         $scope.users[$scope.index].blood = $scope.tempUserData.blood;
                         $scope.users[$scope.index].phone = $scope.tempUserData.phone;
                         $scope.users[$scope.index].weight = $scope.tempUserData.weight;
                         $scope.users[$scope.index].age = $scope.tempUserData.age;
                         $scope.users[$scope.index].city = $scope.tempUserData.city;
                         $scope.users[$scope.index].area = $scope.tempUserData.area;
                         $scope.users[$scope.index].email = $scope.tempUserData.email;
                         $scope.users[$scope.index].password = $scope.tempUserData.password;
                         $scope.users[$scope.index].created = $scope.tempUserData.created;
                     }else{
                         $scope.users.push({
                             id:response.data.id,
                             name:response.data.name,
                             gender:response.data.gender,
                             blood:response.data.blood,
                             phone:response.data.phone,
                             weight:response.data.weight,
                             age:response.data.age,
                             city:response.data.city,
                             area:response.data.area,
                             email:response.data.email,
                             password:response.data.password,
                             created:response.data.created
                         });
                         
                     }
                $scope.userForm.$setPristine();
                $scope.tempUserData = {};
                $('.formData').slideUp();
                $scope.messageSuccess(response.msg);
            }else{
                $scope.messageError(response.msg);
            }
        });
    };
    
    // function to add user data
    $scope.addUser = function(){
        $scope.saveUser('add');
    };
    
    // function to edit user data
    $scope.editUser = function(user){
        $scope.tempUserData = {
                 id:user.id,
                 name:user.name,
                 gender:user.gender,
                 blood:user.blood,
                 phone:user.phone,
                 weight:user.weight,
                 age:user.age,
                 city:user.city,
                 area:user.area,
                 email:user.email,
                 password:user.password,
                 created:user.created
             };
        $scope.index = $scope.users.indexOf(user);
        $('.formData').slideDown();
    };
    
    // function to update user data
    $scope.updateUser = function(){
        $scope.saveUser('edit');
    };
    
    // function to delete user data from the database
    $scope.deleteUser = function(user){
        var conf = confirm('Are you sure to delete the user?');
        if(conf === true){
            var data = $.param({
                'id': user.id,
                'type':'delete'    
            });
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }    
            };
            $http.post("action.php",data,config).success(function(response){
                if(response.status == 'OK'){
                    var index = $scope.users.indexOf(user);
                    $scope.users.splice(index,1);
                    $scope.messageSuccess(response.msg);
                }else{
                    $scope.messageError(response.msg);
                }
            });
        }
    };
    
    // function to display success message
    $scope.messageSuccess = function(msg){
        $('.alert-success > p').html(msg);
        $('.alert-success').show();
        $('.alert-success').delay(5000).slideUp(function(){
            $('.alert-success > p').html('');
        });
    };
    
    // function to display error message
    $scope.messageError = function(msg){
        $('.alert-danger > p').html(msg);
        $('.alert-danger').show();
        $('.alert-danger').delay(5000).slideUp(function(){
            $('.alert-danger > p').html('');
        });
    };
});
