function verify() {
    let number = Number(prompt('Digite um número:'))
    let type
    if (number % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }
    let result = document.querySelector('section#result')
    result.innerHTML = `<p>O número ${number} que foi digitado é ${tipo}!</p>`
}