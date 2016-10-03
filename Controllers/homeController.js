(function () {

    'use strict';
    angular.module('myApp')
    .controller('homeController', funcHomeController);

    funcHomeController.$inject = ['$state', 'coreCommitteeFactory', '$stateParams'];

    function funcHomeController($state, coreCommitteeFactory, $stateParams) {
        var vm = this;
        
        vm.contacts = coreCommitteeFactory.getMemberList();
        
        
        }

    


})();