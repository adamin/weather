var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// routes
weatherApp.config(function ($routeProvider) {    
    $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'homeController'
            })
            .when('/forecast', {
                templateUrl: 'pages/forecast.html',
                controller: 'forecastController'
            })
});

