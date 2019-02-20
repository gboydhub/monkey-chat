'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    owner: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.ChatRoom, {
      foreignKey: 'roomId',
      onDelete: 'CASCADE'
    })
  };
  return Message;
};