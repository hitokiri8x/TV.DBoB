/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('translation_seriesoverview', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    seriesid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    languageid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    mirrorupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
