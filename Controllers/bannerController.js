(function () {

    'use strict';
    angular.module('myApp')
    .controller('bannerController', funcbannerController)
     .animation('.slide-animation', function () {
         return {
             addClass: function (element, className, done) {
                 if (className == 'ng-hide') {
                     TweenMax.to(element, 0.5, { left: -element.parent().width(), onComplete: done });
                 }
                 else {
                     done();
                 }
             },
             removeClass: function (element, className, done) {
                 if (className == 'ng-hide') {
                     // ANIMATION CODE GOES HERE
                 }
                 else {
                     done();
                 }
             }
         };
     });

    funcbannerController.$inject = ['$state'];

    function funcbannerController($state) {
        var vm = this;

        //vm.myInterval = 20;

        vm.slides = [
                    { image: '../img/heights5.jpg', description: 'Image 00' },
                    { image: '../img/heights1.jpg', description: 'Image 01' },
                    { image: '../img/heights2.jpg', description: 'Image 02' },
                    { image: '../img/heights4.jpg', description: 'Image 03' },


        ];

        

        vm.currentIndex = 0;
        vm.setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
        };
        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };
        vm.prevSlide = function () {
            vm.currentIndex = (vm.currentIndex < vm.slides.length - 1) ? ++vm.currentIndex : 0;
        };
        vm.nextSlide = function () {
            vm.currentIndex = (vm.currentIndex > 0) ? --vm.currentIndex : vm.slides.length - 1;
        };

        }

    


})();