angular.module('brhue')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index',
                controller: 'IndexController'
            })
            .when('/xray', {
                templateUrl: 'partials/xray',
                controller: 'XrayController'
            });

        $locationProvider.html5Mode(true);
    });
