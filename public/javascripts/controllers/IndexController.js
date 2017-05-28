angular.module('brhue')
    .controller('IndexController', ['$scope', '$http',
        function($scope, $http) {
            $scope.loadCongress = function() {
                $http.get('/api/congressman')
                .then(function(response) {
                    $scope.congressman = response.data.deputados.deputado.slice(0,10);
                }, function(response) {
                    console.log('error');
                });
            };
        }]);
