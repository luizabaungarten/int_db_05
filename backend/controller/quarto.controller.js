const Quarto = require('../models/Quarto')


const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.nome || !valores.sobrenome || !valores.cpf || !valores.telefone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' })
    }

    try {
        await quarto.create(valores)
        res.status(200).json({ message: 'quarto cadastrado com sucesso!' })
    } catch (err) {
        console.error('Erro ao cadastrar o quarto', err)
        res.status(500).json({ message: 'Erro ao cadastrar o quarto' })
    }
}

const listar = async (req, res) => {
    try {
        const dados = await quarto.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar os hóspedes!', err)
        res.status(500).json({ message: 'Erro ao listar os hóspedes!' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id
    console.log('Código do quarto = ', id)

    if (!id) {
        return res.status(400).json({ message: 'O código do quarto é obrigatório!' })
    }

    try {
        const quartoEncontrado = await quarto.findByPk(id)

        if (!quartoEncontrado) {
            return res.status(404).json({ message: 'quarto não encontrado' })
        }

        await quartoEncontrado.destroy()

        res.status(200).json({ message: 'quarto apagado com sucesso!' })
    } catch (err) {
        console.error('Erro ao apagar o quarto!', err)
        res.status(500).json({ message: 'Erro ao apagar o quarto!' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    console.log('Código do quarto = ', id)

    if (!id) {
        return res.status(400).json({ message: 'O código do quarto é obrigatório!' })
    }

    try {
        const quartoEncontrado = await Hospede.findByPk(id)

        if (!quartoEncontrado) {
            return res.status(404).json({ message: 'quarto não encontrado' })
        }

        res.status(200).json(quartoEncontrado)
    } catch (err) {
        console.error('Erro ao consultar o quarto!', err)
        res.status(500).json({ message: 'Erro ao consultar o quarto!' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    console.log('Código do quarto = ', id)
    const valores = req.body
    console.log(valores)

    if (!id) {
        return res.status(400).json({ message: 'O código do quarto é obrigatório!' })
    }

    if (!valores || Object.keys(valores).length === 0) {
        return res.status(400).json({ message: 'Informe os dados para atualizar o quarto!' })
    }

    try {
        const quartoEncontrado = await Hospede.findByPk(id)

        if (!quartoEncontrado) {
            return res.status(404).json({ message: 'quarto não encontrado' })
        }

        await quartoEncontrado.update(valores)

        const dados = await Hospede.findByPk(id)

        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao atualizar o quarto!', err)
        res.status(500).json({ message: 'Erro ao atualizar o quarto!' })
    }
}

module.exports = { cadastrar, listar, apagar, consultar, atualizar }
