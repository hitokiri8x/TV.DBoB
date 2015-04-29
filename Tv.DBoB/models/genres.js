/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genres', { 
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
