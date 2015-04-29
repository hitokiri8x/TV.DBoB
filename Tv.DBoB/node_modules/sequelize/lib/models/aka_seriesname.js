/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aka_seriesname', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    seriesid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    languageid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    search: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    lasteditby: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    lastedit: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });
};
