(function () {

    'use strict';
    angular.module('myApp')
    .controller('loginController', funcloginController);

    funcloginController.$inject = ['$state'];

    function funcloginController($state) {
        var vm = this;
        vm.showLogin = function () {

            if (vm.userName == "admin" && vm.password == "admin") {
                $state.transitionTo('home');
            } else { alert("Invalid login"); }

        }

    }


})();