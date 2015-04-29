/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvseries', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    SeriesName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SeriesID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    FirstAired: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Network: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NetworkID: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    Runtime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Actors: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    bannerrequest: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    lastupdated: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    Airs_DayOfWeek: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Airs_Time: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flagged: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    forceupdate: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    hits: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    updateID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    requestcomment: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
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
    autoimport: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    disabled: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'No'
    },
    IMDB_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zap2it_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    added: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    addedBy: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    tms_wanted_old: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_priority: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tms_wanted: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    }
  });
};
