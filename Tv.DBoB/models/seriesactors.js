/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seriesactors', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    SeriesID: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    SortOrder: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '3'
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ImageAuthor: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
    },
    ImageAdded: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LastUpdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    },
    LastUpdateBy: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    }
  });
};
