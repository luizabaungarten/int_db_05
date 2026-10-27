const Hospede = require('./Hospede')
const Quarto = require('./Quarto')

Hospede.hasMany(Quarto, {
    foreignKey: 'id',
    as: 'quartoHospede',
    onDelete: 'CASCADE'
})

Quarto.belongsTo(Hospede, {
    foreignKey: 'id',
    as: 'hospedeQuarto',
    allowNule: 'false'
})

module.exports = { Hospede, Quarto }