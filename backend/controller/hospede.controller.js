const Hospede = require('../models/Hospede')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.nome || !valores.sobrenome || !valores.cpf || !valores.telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' })
    }

    try {
        await Hospede.create(valores)
        res.status(200).json({ message: 'Hóspede cadastrado com sucesso!' })
    } catch (err) {
        console.error('Erro ao cadastrar o hóspede', err)
        res.status(500).json({ message: 'Erro ao cadastrar o hóspede' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Hospede.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar os hóspedes!', err)
        res.status(500).json({ message: 'Erro ao listar os hóspedes!' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    console.log('Código do hóspede = ', id)

    if (!id) {
        return res.status(400).json({ message: 'O código do hóspede é obrigatório!' })
    }

    try {
        const hospedeEncontrado = await Hospede.findByPk(id)

        if (!hospedeEncontrado) {
            return res.status(404).json({ message: 'Hóspede não encontrado' })
        }

        await hospedeEncontrado.destroy()

        res.status(200).json({ message: 'Hóspede apagado com sucesso!' })
    } catch (err) {
        console.error('Erro ao apagar o hóspede!', err)
        res.status(500).json({ message: 'Erro ao apagar o hóspede!' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    console.log('Código do hóspede = ', id)

    if (!id) {
        return res.status(400).json({ message: 'O código do hóspede é obrigatório!' })
    }

    try {
        const hospedeEncontrado = await Hospede.findByPk(id)

        if (!hospedeEncontrado) {
            return res.status(404).json({ message: 'Hóspede não encontrado' })
        }

        res.status(200).json(hospedeEncontrado)
    } catch (err) {
        console.error('Erro ao consultar o hóspede!', err)
        res.status(500).json({ message: 'Erro ao consultar o hóspede!' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    console.log('Código do hóspede = ', id)
    const valores = req.body
    console.log(valores)

    if (!id) {
        return res.status(400).json({ message: 'O código do hóspede é obrigatório!' })
    }

    if (!valores || Object.keys(valores).length === 0) {
        return res.status(400).json({ message: 'Informe os dados para atualizar o hóspede!' })
    }

    try {
        const hospedeEncontrado = await Hospede.findByPk(id)

        if (!hospedeEncontrado) {
            return res.status(404).json({ message: 'Hóspede não encontrado' })
        }

        await hospedeEncontrado.update(valores)

        const dados = await Hospede.findByPk(id)

        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao atualizar o hóspede!', err)
        res.status(500).json({ message: 'Erro ao atualizar o hóspede!' })
    }
}

module.exports = { cadastrar, listar, apagar, consultar, atualizar }
