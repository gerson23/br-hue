angular.module('brhue')
    .controller('IndexController', ['$scope', '$http',
        function($scope, $http) {
            $scope.navClass = {'home': 'active'};

            $scope.loadCongress = function() {
                $http.get('/api/congressman')
                .then(function(response) {
                    $scope.congressman = response.data.slice(0,10);
                }, function(response) {
                    console.log('error');
                });
            };
        }]);
