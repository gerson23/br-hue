angular.module('brhue')
    .controller('XrayController', ['$scope', '$http', 'lodash',
        function($scope, $http, lodash) {
            $scope.navClass = {'xray': 'active'};

            var loadCongress = function() {
                $http.get('/api/congressman')
                .then(function(response) {
                    $scope.congressman = response.data;

                    $scope.gender = {
                        data: [lodash.filter($scope.congressman, {sexo: 'masculino'}).length,
                               lodash.filter($scope.congressman, {sexo: 'feminino'}).length],
                        labels: ['Masculino', 'Feminino']
                    };

                    $scope.parties = lodash.countBy(lodash.map($scope.congressman, 'partido'));
                    $scope.party = {data: [], labels: []};
                    lodash.forIn($scope.parties, function(value, key) {
                        $scope.party.data.push(value);
                        $scope.party.labels.push(key);
                    });
                    console.log(parties);
                    console.log($scope.party);
                }, function(response) {
                    console.log('error');
                });
            };
            loadCongress();


        }]);
