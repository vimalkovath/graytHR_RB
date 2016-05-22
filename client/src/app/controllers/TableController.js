(function(){

  angular
    .module('app')
    .controller('TableController', [
      '$http','$interval',
      'tableService',
      TableController
    ]);

  function TableController($http,$interval,tableService) {
    var vm = this;

        vm.tableData = [];
            vm.tableData1 = [];

    // tableService
    //             .GetRooms()
    //             .success(function (data) {
    //                               if (data != null) {
    //                                       console.log("rooms "+data.length);
    //                                       vm.tableData1 =data;
    //                                       }
    //                     })
    //             .error(function (error) {
    //                     console.log(error);
    //                     });


//     $http.get('http://localhost:1337/room/index').success(function(data) {
//       vm.tableData = data;
//     });
// $interval( function(){
//   $http.get('http://192.168.20.100:1337/room/index').success(function(data) {
//     console.log("hai");
//     vm.tableData = data;
//   });
//
// }, 5000);

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }



})();
