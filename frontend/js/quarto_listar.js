let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/quartos')
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        let conteudo = ''
        dados.forEach(el => {
            conteudo += `
            <div>
            <p>Código: ${el.codQuarto}</p>
            <p>Número: ${el.numero}</p>
            <p>Dias de Hospedagem: ${el.diasHospedagem}</p>
            <p>ID do Hóspede: ${el.idHospede}</p>
            </div><br>`
        })
    resposta.innerHTML = conteudo
    })

    .catch((err) => {
        console.error('Erro ao listar os dados', err)
        resposta.innerHTML = '<p>Erro ao conectar com o servidor</p>'
    })
})