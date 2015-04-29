/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('languages', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    abbreviation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    mirrorupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    englishname: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
