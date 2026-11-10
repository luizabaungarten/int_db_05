let resposta = document.getElementById('resposta')
let btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e) => {
    e.preventDefault()

    const codQuarto = Number(document.getElementById('codQuarto').value)

    if (!codQuarto){
        resposta.innerHTML = '<p>Por favor, informe o código do quarto.</p>'
        return
    }

    fetch(`http:localhost:3000/quarto/${codQuarto}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `<p>${dados.message}</p>`
        document.querySelector('form').reset()
    })
    .catch((err) => {
        console.error('Erro ao apagar os dados',err)
        resposta.innerHTML(`<p>Erro ao apagar os dados</p>`)
    })
})