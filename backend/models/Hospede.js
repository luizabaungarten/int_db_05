const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Hospede = db.define('usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    sobrenome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },

    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    },

    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    }
    
    },{
    timestamps: false,
    tableName: 'hospedes'

})

module.exports = Hospede