(function () {

    'use strict';
    angular.module('myApp')
    .controller('momController', funcmomController);

    funcmomController.$inject = ['$state',  '$stateParams'];

    function funcmomController($state, $stateParams) {
        var vm = this;

        vm.mom = [
            { id: 0, name: "MOM02102016", links: "../../img/MOM02102016.pdf" },
        ];


    }




})();