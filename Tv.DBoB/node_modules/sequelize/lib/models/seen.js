/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seen', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_episode: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    path1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    path2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    path3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dateseen: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};
