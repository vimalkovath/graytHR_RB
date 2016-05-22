(function(){

  angular
    .module('app')
    .controller('EmiController', [ '$mdSidenav',
      EmiController
    ]);

  function EmiController() {
    var vm = this;




        vm.tableData = [
      {
        "name": "orange",
        "capacity": "3",
        "floor": "2",
        "status":"Booked",
        "createdAt": "2016-05-21T17:10:54.253Z",
        "Duration": "2hr",
        "id": "5740969e52ce780220eec2e4"
      }
    ];



  }

})();
