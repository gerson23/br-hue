angular.module('brhue')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/index',
                controller: 'IndexController'
            });

        $locationProvider.html5Mode(true);
    });
