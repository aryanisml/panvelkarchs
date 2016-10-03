(function () {

    'use strict';
    angular.module('myApp')
    .controller('corecommiteeController', funccorecommiteeController);

    funccorecommiteeController.$inject = ['$state', '$stateParams', 'coreCommitteeFactory'];

    function funccorecommiteeController($state, $stateParam, coreCommitteeFactory) {
        var vm = this;
        var index = $stateParam.contactIndex;
        vm.contacts = coreCommitteeFactory.getMemberList();
        vm.currentContact = vm.contacts[index];

    }




})();