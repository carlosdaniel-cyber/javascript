function calcMedia() {
    let name = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a 1ª nota de ${name}?`))
    let n2 = Number(prompt(`Além de ${n1}, qual foi a outra nota de ${name}?`))
    let res = document.querySelector('section#res')
    res.innerHTML = `<p>Calculando a média final de ${name}</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    let media = ((n1+n2)/2).toFixed(2)
    res.innerHTML += `<p>A média final será <mark>${media}</mark></p>.`
    let msg
    if (media < 6) {
        msg = 'Estude mais!'
    } else {
        msg = 'Meus parabéns!'
    }

    res.innerHTML += `<p>A mensagem que temos é: ${msg}`
}