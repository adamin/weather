weatherApp.directive("weatherForecastItem", function () {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/weatherForecastItem.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToStandard: "&",
            units: "@",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});