/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('watchlist', { 
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_episode: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    }
  });
};
