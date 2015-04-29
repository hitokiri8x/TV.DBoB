var express = require('express');
var Sequelize = require('sequelize');
var config = require('./config');
var sequelize = new Sequelize(config.db.catalog, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

var modello = require('sequelize-import')('models', sequelize, {
});

module.exports = modello;
