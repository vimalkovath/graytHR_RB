(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q','$http',
      tableService
  ]);

  // function tableService($q,$http) {
  //
  //         console.log("Inside Service");
  //         var feaching ={};
  //
  //
  //           feaching.GetRooms = function() {
  //             cnosole.log("inside get roooms");
  //           return $http.get("http://localhost:1337/room/index");
  //           }
  //
  //          return feaching;
  //     }


  function tableService($q){


    var tableData = [
  {
    "name": "orange",
    "capacity": "3",
    "floor": "2",
    "projector": "true",
    "whiteboard": "false",
    "videoConference": "false",
    "wifi": "true",
    "type":"Emergency",
    "status":"alloted",

    "teleConference": "false",
    "createdAt": "2016-05-21T17:10:54.253Z",
    "updatedAt": "2016-05-21T17:10:54.253Z",
    "id": "5740969e52ce780220eec2e4"
  },

  {
    "name": "blue",
    "capacity": "8",
    "floor": "2",
    "projector": "true",
    "whiteboard": "false",
    "videoConference": "false",
    "wifi": "true",
    "status":"in Queue",

    "teleConference": "false",
    "type":"client meeting",
    "createdAt": "2016-05-22T01:40:38.085Z",
    "updatedAt": "2016-05-22T01:40:38.085Z",
    "id": "57410e16a42f76a20ef7f3a8"
  },
  {
    "name": "black",
    "capacity": "15",
    "floor": "2",
    "projector": "true",
    "whiteboard": "false",
    "videoConference": "false",
    "wifi": "true",
    "type":"deleivery meeting ",
    "teleConference": "false",
    "createdAt": "2016-05-22T01:40:50.982Z",
    "updatedAt": "2016-05-22T01:40:50.982Z",
    "id": "57410e22a42f76a20ef7f3a9",
    "status":"in Queue"

  },
  {
    "name": "red",
    "capacity": "3",
    "floor": "2",
    "projector": "true",
    "whiteboard": "false",
    "videoConference": "false",
    "wifi": "true",
    "type":"decision making meeting",
    "status":"in Queue",
    "teleConference": "false",
    "createdAt": "2016-05-21T19:54:03.608Z",
    "updatedAt": "2016-05-21T19:54:03.608Z",
    "id": "5740bcdbfa4c93c4210efae7"
  },
  {
    "name": "green",
    "capacity": "10",
    "floor": "2",
    "projector": "true",
    "whiteboard": "false",
    "videoConference": "false",
    "wifi": "true",
    "type":"Event meeting",
    "status":"in Queue",
    "teleConference": "false",
    "createdAt": "2016-05-22T01:40:18.351Z",
    "updatedAt": "2016-05-22T01:40:18.351Z",
    "id": "57410e03a42f76a20ef7f3a7"
  }];

    //           feaching.GetRooms = function() {
    //             cnosole.log("inside get roooms");
    //           return $http.get("http://localhost:1337/room/index");
    //           }



    return {
      loadAllItems : function() {
        return $q.when(tableData);
      }
    };
  }
 })();
