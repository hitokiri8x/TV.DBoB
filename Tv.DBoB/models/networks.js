/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('networks', { 
    netID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    Network: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Wikipedia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ISO6393: {
      type: 'CHAR(3)',
      allowNull: true,
    },
    ISO31661: {
      type: 'CHAR(3)',
      allowNull: true,
    }
  });
};
