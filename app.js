/*************************************************************************
 *purpose   : App.Js to redirect to pages.
 * @file    : app.js
 * @author  : Nikhil Lad
 * @version : 1.0
 * @since   : 23/01/2019 
 **********************************************************************/

var app = angular.module('myApp', ['ui.router'], function($httpProvider) {    // defines angular js module
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; //new add
  });


app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
                                    //provides state of object used for routing.
    .state( 'registration',{
        url:'/registration',
        templateUrl:'Templates/registrationform.html',
        //controller:'registrationctrl'
        controller:'registration'
       
    })
    .state( 'login',{
        url:'/login',                       //user goes to this url
        templateUrl:'Templates/login.html', //binds the content from this html
        controller:'loginctrl'              //goes to controller and binds it with a scope
    })
  

    $urlRouterProvider.otherwise('login');

}]);

