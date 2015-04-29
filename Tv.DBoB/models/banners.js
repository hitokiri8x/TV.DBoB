/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banners', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    keytype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keyvalue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    subkey: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateadded: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    languageid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '7'
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    colors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    artistcolors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mirrorupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
