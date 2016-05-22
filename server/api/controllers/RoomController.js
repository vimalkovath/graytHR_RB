/**
 * RoomController
 *
 * @description :: Server-side logic for managing rooms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	index: function(req, res, next) {
    Room.find(function foundRooms(err, rooms) {
      if (err) return next(err);
      res.json(rooms);
    });
  },


	create: function(req, res) {
	console.log("Creating RoomS");
	var paramObj = {
									name: req.param('name'),
									capacity: req.param('capacity'),
									floor: req.param('floor'),
									projector: req.param('projector'),
									whiteboard: req.param('whiteboard'),
									videoConference: req.param('videoConference'),
									wifi: req.param('wifi'),
									teleConference: req.param('teleConference')
									}


	console.log(paramObj);
	Room.create(paramObj, function roomCreated(err, room) {
		if (err) { console.log(err);
		req.session.flash = {err: err }
		return res.json(err);
		}
		res.json(room);
		});
	},


show: function(req, res, next) {
            Room.findOne(req.param('id'), function foundRoom(err, room) {
                     if (err) return next(err);
                      if (!room) return next();
                      res.json(room);
            });
  },

 update: function(req, res, next) {

	 var paramObj = {
 									name: req.param('name'),
 									capacity: req.param('capacity'),
 									floor: req.param('floor'),
 									projector: req.param('projector'),
 									whiteboard: req.param('whiteboard'),
 									videoConference: req.param('videoConference'),
 									wifi: req.param('wifi'),
 									teleConference: req.param('teleConference')
 									}

    Room.update(req.param('id'), paramObj, function roomUpdated(err) {
      if (err) {
        console.log(err);
        req.session.flash = {  err: err   }
        return res.json(err);
      }
    res.redirect('/room/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {
    Room.findOne(req.param('id'), function foundRoom(err, room) {
      if (err) return next(err);
      if (!room) return next('room doesn\'t exist.');
      Room.destroy(req.param('id'), function roomtypeDestroyed(err) {
        if (err) return next(err);
    });
      res.redirect('/room');
    });
  },


};
