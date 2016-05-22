(function(){

  angular
    .module('app')
    .controller('TableRealController', [
      '$http','$interval',
      'tableService',
      TableRealController
    ]);

  function TableRealController($http,$interval) {
    var vm = this;

        vm.tableData = [];
            vm.tableData1 = [];



     $http.get('http://localhost:1337/room/index').success(function(data) {
       vm.tableData = data;
     });
// $interval( function(){
//   $http.get('http://192.168.20.100:1337/room/index').success(function(data) {
//     console.log("hai");
//     vm.tableData = data;
//   });
//
// }, 5000);

   
  }



})();
