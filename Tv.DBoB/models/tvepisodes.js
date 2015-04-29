/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tvepisodes', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    seasonid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    EpisodeNumber: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    EpisodeName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Unknown'
    },
    FirstAired: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    GuestStars: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Director: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Writer: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ProductionCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ShowURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastupdated: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    flagged: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      defaultValue: '0'
    },
    DVD_discid: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DVD_season: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    DVD_episodenumber: {
      type: DataTypes.DECIMAL(10,1) UNSIGNED,
      allowNull: true,
    },
    DVD_chapter: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    locked: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'no'
    },
    absolute_number: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seriesid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    lastupdatedby: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    airsafter_season: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    airsbefore_season: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    airsbefore_episode: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    thumb_author: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    thumb_added: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    thumb_width: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
    },
    thumb_height: {
      type: DataTypes.INTEGER(5),
      allowNull: true,
    },
    tms_export: {
      type: DataTypes.BIGINT,
      allowNull: true,
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
    IMDB_ID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EpImgFlag: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    tms_review_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    tms_review_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tms_review_blurry: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_review_dark: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_review_logo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_review_other: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_review_unsure: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    tms_priority: {
      type: 'BIT(1)',
      allowNull: false,
      defaultValue: 'b'0''
    }
  });
};
