let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) =>{
    e.preventDefault()

    const valores = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
    }

    fetch('http://localhost:3000/hospede', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `<p>${dados.message}</p>`
        document.querySelector('form').reset()
    })

    .catch((err) => {
        console.error('Erro ao cadastrar o hóspede', err)
        resposta.innerHTML(`<p>Erro ao cadastrar o hóspede</p>`)
    })
})