(function () {
    angular
        .module('app')
        .controller('PerformanceController', [
             '$q','$http','$location',
            PerformanceController
        ]);

    function PerformanceController($q,$http,$location) {

        var vm = this;
        vm.userBrand="";
        vm.brands = ('type_of_discussion Decision_Making Client Emergency Scrum Status_Call Event_Meeting').split(' ').map(function (state) { return { abbrev: state }; });

        vm.add = add;

        function add() {

            $http.post('http://192.168.20.100:1337/room/create', vm.user)
            .success(function(data, status, headers, config){


 $location.url('/table');
 // $location.path("http://localhost:3000/?#/table");
              //window.location = "#/";
              console.log("Sending data to server..."+data);

              });


 // $location.url('/page.html');

        }





    }
})();
