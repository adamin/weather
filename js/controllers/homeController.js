weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
        $scope.city = cityService.city;
        $scope.cities = cityService.cities;

        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        });
    }]);