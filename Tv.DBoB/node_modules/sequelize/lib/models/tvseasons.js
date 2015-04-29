/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvseasons', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    seriesid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    season: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    bannerrequest: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    locked: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'no'
    },
    mirrorupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    lockedby: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    tms_wanted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    }
  });
};
