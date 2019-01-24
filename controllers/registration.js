/*************************************************************************
 *purpose   : Controller for registration.
 * @file    : registration.js
 * @author  : Nikhil Lad
 * @version : 1.0
 * @since   : 23/01/2019 
 **********************************************************************/


app.controller('registration', function ($scope,services, $state)
 {                                                      
     $scope.registration = function() {     // checking ng-click method in registration page.
     console.log('registration');
     var user = {
         username: $scope.username,         // stores registration details in variable.
         email:$scope.email,
         password:$scope.password
     }
     console.log(user);
     services.registerUser(user).then(          // goes to registerUser method in services.
        function successCallback(response){
        console.log("registration sucessful");
        console.log(response.user);
        $state.go("login");
        },
        function errorCallback(response){
        console.log("register unsuccessful");
        console.log(response.user)
        }
        );
    //     services.registerUser(user);
    //  services.registerUser(user);
    }
    
 });


 
 


 
 
