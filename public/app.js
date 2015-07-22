var app = angular.module('portfolio', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouteProvider)

	$urlRouterProvider.otherwise('/')

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'index.html'
	})


	)