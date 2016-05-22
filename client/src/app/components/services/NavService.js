(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [

      {
        name: 'Booking',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Add Room',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'View',
        icon: 'view_module',
        sref: '.table'
      },
      {
        name: 'status',
        icon: 'person',
        sref: '.status'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
