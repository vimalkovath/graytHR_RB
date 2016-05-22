(function(){

  angular
    .module('app')
    .controller('ProfileController', ['$mdDialog','$interval', 'tableService',
      ProfileController
    ]);

  function ProfileController($mdDialog, $interval, tableService) {
    var vm = this;

    vm.userBrand="";
    vm.brands = ('Decision_Making Client Emergency Scrum Status_Call Event_Meeting').split(' ').map(function (state) { return { abbrev: state }; });


    var date = new Date();
       var d = date.getDate();
       var m = date.getMonth();
       var y = date.getFullYear();

    vm.events = [
          {title: 'All Day Event',start: new Date(y, m, 1)},
          {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
          {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
          {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
          {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
          {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ];

        vm.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };


    vm.renderCalender = function(calendar) {
         if(uiCalendarConfig.calendars[calendar]){
           uiCalendarConfig.calendars[calendar].fullCalendar('render');
         }
       };


    vm.eventsF = function (start, end, timezone, callback) {
     var s = new Date(start).getTime() / 1000;
     var e = new Date(end).getTime() / 1000;
     var m = new Date(start).getMonth();
     var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
     callback(events);
   };

   vm.calEventsExt = {
         color: '#f00',
         textColor: 'yellow',
         events: [
            {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
            {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
            {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
          ]
      };





    vm.tableData = [];


    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });


    vm.addTodoRooms = addTodoRooms;

            vm.todRooms = [];


            function addTodoRooms() {
              console.log(vm.userBrand);

var waitage="0";

              if(vm.userBrand === "Emergency"){waitage=6}
              if(vm.userBrand === "Client"){waitage=5}
              if(vm.userBrand === "Decision_Making"){waitage=4}

              if(vm.userBrand === "Scrum "){waitage=3}
              if(vm.userBrand === "Status_Call"){waitage=2}
              if(vm.userBrand === "Event_Meeting"){waitage=2}

              vm.todRooms.push(vm.user);

              console.log(vm.todRooms);

            }





                    vm.buttonEnabled = false;
                    vm.showProgress = false;
                    vm.reloadServer = 'Staging';
                    vm.performProgress = performProgress;
                    vm.determinateValue = 10;

                    function performProgress() {


                      console.log(vm.userBrand);

                    var waitage="0";
                    var message="";


                    // function randomString() {
                    	// var chars = "0123456789Abcdefghijklmnopqrstuvwxyz";
                    	// var string_length = 5;
                    	// var randomstring = '';
                    	// 	for (var i=0; i<string_length; i++) {
                    	// 	var rnum = Math.floor(Math.random() * chars.length);
                    	// 	randomstring += chars.substring(rnum,rnum+1);
                    	// }
                    	// document.randform.randomfield.value = randomstring;
                    	// 	}




                      if(vm.userBrand === "Emergency"){
                                                      waitage=6;

                                                      var chars = "0123456789Abcdefghijklmnopqrstuvwxyz";
                                                      var string_length = 5;
                                                      var randomstring = '';
                                                        for (var i=0; i<string_length; i++) {
                                                        var rnum = Math.floor(Math.random() * chars.length);
                                                        randomstring += chars.substring(rnum,rnum+1);
                                                      }




                                                      message="based on the emergency flag!!!,your booking has been confirmed & your password is "+randomstring;



                                                    }
                      if(vm.userBrand === "Client"){waitage=5;message="thanks for your booking, your request under conideration, you will get confiramtion mail before 2hrs of the meeting ";}
                      if(vm.userBrand === "Decision_Making"){waitage=4;message="thanks for your booking, your request under conideration, you will get confiramtion mail before 2hrs of the meeting" ;}

                      if(vm.userBrand === "Scrum "){waitage=3;message="thanks for your booking, your request under conideration, you will get confiramtion mail before 2hrs of the meeting ";}
                      if(vm.userBrand === "Status_Call"){waitage=2;message="thanks for your booking, your request under conideration, you will get confiramtion mail before 2hrs of the meeting ";}
                      if(vm.userBrand === "Event_Meeting"){waitage=2;message="thanks for your booking, your request under conideration, you will get confiramtion mail before 2hrs of the meeting ";}


console.log(waitage);

                        vm.showProgress = true;
                        interval = $interval(function() {
                            vm.determinateValue += 1;
                            if (vm.determinateValue > 100) {
                                vm.determinateValue = 10;
                                vm.showProgress = false;
                                showAlert(message);
                                $interval.cancel(interval)
                            }
                        }, 50, 0, true);
                    }

                    function showAlert(message) {
                        alert = $mdDialog.alert({
                            title:'thanks for your booking',
                            content: message,
                            ok: 'Close'
                        });
                        $mdDialog
                            .show(alert)
                            .finally(function () {
                                alert = undefined;
                            });
                    }






  }

})();
