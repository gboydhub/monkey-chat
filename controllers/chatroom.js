const ChatRoom = require('../models').ChatRoom;

module.exports = {
  create(req, res) {
    return ChatRoom
    .create({
      title:req.body.title
    })
    .then(chatroom => res.status(201).send(chatroom))
    .catch(error => res.status(400).send(error));
  }
}