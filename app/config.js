(function () {

    'use strict';
    angular.module('myApp')
    .config(funcStateRouting);


    funcStateRouting.$inject = ['$stateProvider', '$urlRouterProvider'];
    function funcStateRouting($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
       .state('contact', {
           url: '/contact',
           templateUrl: 'partialViews/partial-contactus.html',
           controller: "contactController as vm"
       })
        .state('home', {
            url: '/home',
            templateUrl: 'partialViews/partial-home.html',
            controller: "homeController as vm"
        })
        .state('home.list', {
            url: '/list',
            params: { contactIndex: 0 },
            templateUrl: 'partialViews/partial-corecommittee.html' ,
            controller: "corecommiteeController as vm"
        })
 .state('gallary', {
            url: '/gallary',
            templateUrl: 'partialViews/partial-maintenance.html'

        })
 .state('documents', {
            url: '/documents',
            templateUrl: 'partialViews/partial-maintenance.html'

        })

    };



})();