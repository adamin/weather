weatherApp.directive("weatherCurrent", function () {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/weatherCurrent.html',
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