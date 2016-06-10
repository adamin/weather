weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function ($scope, $resource, cityService) {

        $scope.city = cityService.city;
        $scope.forecast = {};
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/city", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

        $scope.weatherResult = $scope.weatherAPI.get({
            APPID: '4d3f60a3b62ffb7bc1014a3780dfc2c9',
            id: $scope.city.id,
        }, function(data) {
            var index = 0;
            var counter = 8;
            for(var i = 0; i < data.list.length; i++) {
                if($scope.compareDates(data.list[i].dt) == 1) {
                    if(counter % 8 != 0)
                    {
                        $scope.forecast[index].push(data.list[i]);
                        counter++;
                    }
                    else {
                        index++;
                        counter++;
                        $scope.forecast[index] = new Array();
                        $scope.forecast[index].push(data.list[i]);
                    }
                }
            }
        });

        $scope.convertToCelsius = function(degK) {
            return Math.round(degK - 273.15);
        };

        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };
        
        $scope.compareDates = function(dt1, dt2) {
            var date1 = $scope.convertToDate(dt1);
            
            if(typeof(dt2) == 'undefined') {
                var date2 = new Date();
            }
            else {
                var date2 = $scope.convertToDate(dt2);
            }
            date1.setHours(0, 0, 0, 0, 0);
            date2.setHours(0, 0, 0, 0, 0);
            
            if(date1 === date2) {
                return 0;
            }
            else if(date1 > date2) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }]);


