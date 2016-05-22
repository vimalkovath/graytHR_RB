(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'BookMyShow',
        userName: 'Tickets',
        date: '1901',
        text: '20% BookMyShow tickets'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Apparels',
        userName: 'Nike',
        date: '1901',
        text: '20% Nike Apparels ltd.'
      },

      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Household',
        userName: 'offer',
        date: '1918',
        text: '10% on Household Appliances at Flipkart'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Radisson Blue',
        userName: 'Special',
        date: '1921',
        text: '10% discount at Radisson Blue.'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
