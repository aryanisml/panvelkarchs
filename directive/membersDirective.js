(function () {

    angular.module('myApp')
    .directive('members', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partialViews/partial-listmember.html'
        }
    })


})();


