/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('translation_episodename', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    episodeid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    languageid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    translation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mirrorupdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  });
};
