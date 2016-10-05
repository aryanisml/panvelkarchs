(function () {

    'use strict';
    angular.module('myApp')
    .controller('linkController', funclinkController);

    funclinkController.$inject = ['$state', '$stateParams'];

    function funclinkController($state, $stateParams) {
        var vm = this;

        vm.link = [
            { id: 0, name: "सहकारी गृहनिर्माण संस्था कामकाज संहिता - मराठी", links: "https://sahakarayukta.maharashtra.gov.in/site/upload/documents/Final_draft_Housing_Maunal.pdf" },
            { id: 1, name: "सहकारी गृहनिर्माण संस्था कामकाज संहिता - इंग्रजी", links: "https://sahakarayukta.maharashtra.gov.in/site/upload/documents/Housing%20Manual%202012%20English.pdf" },
            { id: 2, name: "LetterHead", links: "../img/LetterdHead.jpg" },
        ];


    }




})();