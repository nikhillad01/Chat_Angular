/*************************************************************************
 *purpose   : Services used 
 * @file    : services.js
 * @author  : Nikhil Lad
 * @version : 1.0
 * @since   : 23/01/2019 
 **********************************************************************/

app.service('services',function ($http, $location) {

                                    //   $http makes a request to server and takes the response

  this.registerUser = function(user) {
                                
     return $http({
          //declaring method type           // will redirect to signup page.
          method: 'POST',
         
          url: 'http://127.0.0.1:8000/accounts/signup/',
          //sending user register data
          data: user
      })
  },
  
 this.loginUser = function (user) {
    return $http({
         //method: 'POST',
                                     // will redirect Djangos page.
         url: "http://127.0.0.1:8000/",
                                    //sending user register data
         data: user
         
     })
 }

});