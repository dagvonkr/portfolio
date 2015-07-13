var app = angular.module('portfolio', ['ui.router'])
.config(function($stateProvider, $urlRouteProvider)

	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'index.html'
	})


	)