(function () {

    'use strict';
    angular.module('myApp')
    .controller('contactController', funcController);

    funcController.$inject = ['$state'];

    function funcController($state) {
        var vm = this;

        vm.Send = function () {
            if (vm.name == "" && vm.message == "" && vm.email == "") {
                alert("Please fill the require details");
               
            } else {
                alert("Thank you will contact you soon");
                vm.name = "";
                vm.message = "";
                vm.email = "";
            }
            
            }



        }

    


})();