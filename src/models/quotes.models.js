const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('quote', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    year: {
        type: DataTypes.INTEGER
    
    }
}, {
    timestamps: false
})

module.exports = Quotes