let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) =>{
    e.preventDefault()

    const valores = {
        numeroQuarto: document.getElementById('numeroQuarto').value,
        diasHospedagem: document.getElementById('diasHospedagem').value,
        valorDiaria: document.getElementById('valorDiaria').value,
        idHospede: document.getElementById('idHospede').value,
    }

    fetch('http://localhost:3000/quarto', {
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
        console.error('Erro ao cadastrar o quarto', err)
        resposta.innerHTML(`<p>Erro ao cadastrar o quarto</p>`)
    })
})