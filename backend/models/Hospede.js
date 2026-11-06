const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Hospede = db.define('usuario',{
    codHospede: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    
    cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    },

    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
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