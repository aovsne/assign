var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html'
	})
	.when('/about', {
		templateUrl: 'about.html'
	})
	.when('/works', {
		templateUrl: 'works.html'
	})
	.otherwise({
		redirectTo: '/home'
	})
})