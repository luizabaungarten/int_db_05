const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Quarto = db.define('produto', {
    numeroQuarto: {
        type: DataTypes.INTEGER
    },

   diasHospedagem: {
        type: DataTypes.STRING(10),
        allowNull: false
    },

     valorDiaria: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }

    },{
    timestamps: false,
    tableName: 'quartos'

})

module.exports = Quarto