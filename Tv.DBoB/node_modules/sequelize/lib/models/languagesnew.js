/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('languagesnew', { 
    ISO6393: {
      type: 'CHAR(3)',
      allowNull: false,
      defaultValue: ''
    },
    ISO6392B: {
      type: 'CHAR(3)',
      allowNull: true,
    },
    ISO6392T: {
      type: 'CHAR(3)',
      allowNull: true,
    },
    ISO6391: {
      type: 'CHAR(2)',
      allowNull: true,
    },
    Scope: {
      type: 'CHAR(1)',
      allowNull: true,
    },
    Type: {
      type: 'CHAR(1)',
      allowNull: true,
    },
    EnglishName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    NativeName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
