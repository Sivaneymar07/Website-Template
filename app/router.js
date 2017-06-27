app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'partials/getStarted.html',
			controller  : 'getStartedController',
 		})
		.when('/login',{
			templateUrl : 'partials/login.html',
			controller  : 'loginController'
		})
		.when('/template',{
			templateUrl : 'partials/template.html',
		
		})
		.when('/template1',{
			templateUrl : 'partials/template1.html',
			controller  : 'template1Controller'
		})
		.when('/register',{
			templateUrl : 'partials/register.html',
			
		})
		.when('/websitetype',{
			templateUrl : 'partials/websitetype.html',
			
		})
		.when('/mobile',{
			templateUrl : 'partials/mobile.html',
		
		})
		.when('/home',{
			templateUrl : 'partials/home.html',
			
		})
		.when('/team',{
			templateUrl : 'partials/team.html',
			
		})
		.when('/portfolio',{
			templateUrl : 'partials/portfolio.html',
			
		})
		.when('/contactus',{
			templateUrl : 'partials/contactus.html',
			
		})
		.otherwise({
			redirectTo : '/',
			controller  : ''
		})
}]);