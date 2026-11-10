let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()

    const codHospede = Number(document.getElementById('codHospede').value)

    fetch(`http://localhost:3000/hospede/${codHospede}`)
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `
        `
    })
})