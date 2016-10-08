(function () {
    'use strict';

    angular.module('myApp')
       .factory('coreCommitteeFactory', funccoreCommitteeFactory);

    funccoreCommitteeFactory.$inject = ['$http'];

    function funccoreCommitteeFactory($http) {

        var service = {};
        service.getMemberList = getMemberList;
        return service;

        function getMemberList() {
            var contactList = [
   { id: 0, name: 'Mr.Swapnil Kamble', email: 'swapnilkamble@live.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "8", flatNo: "302", mobileNo: "9768719367/ 7506073922", imgProfile: "../../img/FinalImage.jpg" },
   { id: 1, name: 'Mr.Anuj Kumar', email: 'anujkumar_hrl@rediffmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "2", flatNo: "303", mobileNo: "9320178853", imgProfile: "../../img/AnujKumar.jpg" },
   { id: 2, name: 'Mr. Prashant Mishra', email: 'prashantmsr@yahoo.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Treasurer', buildingNo: "7", flatNo: "105", mobileNo: "8655506148", imgProfile: "../../img/PrashantMishra.jpg" },
{ id: 3, name: 'Mr.Ravindra Brahmane', email: 'rzb050271@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "5", flatNo: "102", mobileNo: "9833341117", imgProfile: "../../img/Ravindra.jpg" }
, { id: 4, name: 'Mr.Sanjay Rathivadekar', email: 'sanjay.rathivadekar@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9821898769", imgProfile: "../../img/Sanjay.jpg" }
, { id: 5, name: 'Mr.Kishor Phatangare', email: 'kishor.phatangare@rediffmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "7", flatNo: "206", mobileNo: "9890898189", imgProfile: "../../img/IMG-20161001-WA0007.jpg" }
, { id: 6, name: 'Mr.Sanjay Salunke', email: 'sanjay.salunke@sumitservices.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "5", flatNo: "604", mobileNo: "9702483645/9930140893", imgProfile: "../../img/IMG-20161001-WA0011.jpg" }
, { id: 7, name: 'Mr.Dadasaheb Thorat', email: 'dadathorat_30@rediffmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "5", flatNo: "103", mobileNo: "9096646446", imgProfile: "" }
, { id: 8, name: 'Mr.Vishal Shujalpurkar', email: 'shujalurkar@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "12", flatNo: "201", mobileNo: "8108162309", imgProfile: "" }
, { id: 9, name: 'Mr.Shakarnarayan', email: 'mssniyer@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "02", flatNo: "502", mobileNo: "9322027281/8806606264", imgProfile: "../../img/IMG-20161001-WA0005.jpg" }
, { id: 10, name: 'Mr.Ansar Patel', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "12", flatNo: "", mobileNo: "888836415", imgProfile: "../../img/IMG-20161002-WA0002.jpg" }
, { id: 11, name: 'Mr. Pradip Phaple', email: 'pphaple1978@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Secretary', buildingNo: "4", flatNo: "01", mobileNo: "9860228743", imgProfile: "../../img/IMG-20161002-WA0003.jpg" }
, { id: 12, name: 'Mr.Baban Ghoarpade', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "8", flatNo: "404", mobileNo: "9769018144", imgProfile: "" }
, { id: 13, name: 'Mr.Tejpal Ghaagas', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9421422811", imgProfile: "../../img/IMG-20161001-WA0006.jpg" }
, { id: 14, name: 'Mr.Yogesh Panvelkar', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "1", flatNo: "", mobileNo: "9890152913", imgProfile: "" }
, { id: 15, name: 'Mr.Nitin Prabhu', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9920416671", imgProfile: "" }
, { id: 16, name: 'Mr.Rajith Nair', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "6", flatNo: "", mobileNo: "7506358816", imgProfile: "../../img/IMG-20161001-WA0008.jpg" }
, { id: 17, name: 'Mr.Omnath Keshri', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "8097147405", imgProfile: "" }
, { id: 18, name: 'Mr.Vishal', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "8108162309", imgProfile: "" }
, { id: 19, name: 'Mr.Sagar D', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "8691927889", imgProfile: "" }
, { id: 20, name: 'Mr.Tanveer Singh Shekhawat', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "8691981541", imgProfile: "../../img/IMG-20161001-WA0009.jpg" }
, { id: 21, name: 'Mr.Shuja Khan', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "8898924189", imgProfile: "" }
, { id: 22, name: 'Mr.Dharam Dhoke', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9552903327", imgProfile: "" }
, { id: 23, name: 'Mr.Santosh Mishra', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9820832442", imgProfile: "" }
, { id: 24, name: 'Mr.Samir Patil', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "", flatNo: "", mobileNo: "9821999223", imgProfile: "" }
, { id: 25, name: 'Mr. Suryankant Pawar', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Chairman', buildingNo: "1", flatNo: "104", mobileNo: "9833320052", imgProfile: "" }
, { id: 26, name: 'Mr.Nihar Thaker', email: '', phone: '123-456-7890', url: 'www.google.com', notes: 'Member', buildingNo: "1", flatNo: "", mobileNo: "9987470968", imgProfile: "../../img/IMG-20161001-WA0010.jpg" }


            ];
            return contactList;

            
        }

    }
})();