let resposta =document.getElementById('resposta')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    const Quarto = Number(document.getElementById('Quarto').value)

    if(!Quarto) {
        resposta.innerHTML = '<p>Por favor, informe o Código Quarto!</p>'
        return
    }

    quartoAtualizado = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    }

    fetch(`http://localhost:3000/hospede/${codQuarto}` , {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(quartoAtualizado)
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `
        <div>
        <p>Código: ${dados.codQuarto}</p>
        <p>Nome: ${dados.nome}</p>
        <p>Cpf: ${dados.cpf}</p>
        <p>Email: ${dados.email}</p>
        <p>Telefone: ${dados.Telefone}</p>
        <br>
        </div>`

        document.querySelector('form').reset()
    })

    .catch((err) => {
        console.error('Erro ao atualizar os dados', err)
        resposta.innerHTML = '<p>Erro ao atualizar os dados</p>'
    })
})