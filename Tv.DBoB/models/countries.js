/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', { 
    countryid: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
    },
    iso2: {
      type: 'CHAR(2)',
      allowNull: true,
    },
    shortname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    longname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    iso3: {
      type: 'CHAR(3)',
      allowNull: true,
    },
    numcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    un_member: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    callingcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tld: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
};
