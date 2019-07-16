var app = angular.module("myDemo",['ngRoute']);

app.config(['$stateProvider','$urlRouterProvider','$httpProvider','$locationProvider', function($stateProvider,$urlRouterProvider,$httpProvider,$locationProvider){

    $urlRouterProvider.otherwise('/login');

    $urlRouterProvider
        .state('login',{
            url : '/login',
            templateUrl : 'src/modules/login/login.html',
            controller : 'loginCtrl'
        })
}]);

app.constant('appSetting',{
    API_URl : 'common url for http calls'
});
