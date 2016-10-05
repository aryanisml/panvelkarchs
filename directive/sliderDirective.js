(function () {

    angular.module('myApp')
    .directive('slider', function ($timeout) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                images: '='
            },
            link: function (scope, elem, attrs) { },
            templateUrl: 'partialViews/partial-banner.html',
            controller: 'bannerController as vm'

        };
    });


})();


