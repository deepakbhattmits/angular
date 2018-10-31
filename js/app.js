
// Declare app level module which depends on filters, and services
var app = angular.module('myApp',['ngRoute', 'ngAnimate', 'angularRangeSlider', 'ui.bootstrap','myCtrlHome','myCtrlProfile','myCtrlGallary','myCtrlClips','myCtrlMp3','myCtrlShop','myCtrlCart','myCtrlAdmin','myCtrlContact']);
app.config( function( $routeProvider){
			$routeProvider.when('/home', {templateUrl: 'templates/home.html', controller: 'myCtrlHome'});
			$routeProvider.when('/profile', {templateUrl: 'templates/profile.html', controller: 'myCtrlProfile'});
			$routeProvider.when('/gallary', {templateUrl: 'templates/gallary.html', controller: 'myCtrlGallary'});
			$routeProvider.when('/clips', {templateUrl: 'templates/clips.html', controller: 'myCtrlClips'});
			$routeProvider.when('/mp3', {templateUrl: 'templates/mp3.html', controller: 'myCtrlMp3'});
			$routeProvider.when('/shops', {templateUrl: 'templates/shops.html', controller: 'myCtrlShop'});
			$routeProvider.when('/cart', {templateUrl: 'templates/cart.html', controller: 'myCtrlCart'});
			$routeProvider.when('/admin', {templateUrl: 'templates/admin.html', controller: 'myCtrlAdmin'});
			$routeProvider.when('/contact', {templateUrl: 'templates/contact.html', controller: 'myCtrlContact'});
			$routeProvider.otherwise({redirectTo: '/home'});
});
