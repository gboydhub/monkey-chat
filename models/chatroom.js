'use strict';
module.exports = (sequelize, DataTypes) => {
  const ChatRoom = sequelize.define('ChatRoom', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  ChatRoom.associate = function(models) {
    ChatRoom.hasMany(models.Message, {
      foreignKey: 'msgId',
      as: 'messages'
    })
  };
  return ChatRoom;
};