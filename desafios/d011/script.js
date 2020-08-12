function verify() {
    let year = prompt('Qual é o ano que você quer verificar?')
    let verified
    
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        verified = '<span style="background-color: lightgreen;"><strong> É BISSEXTO</strong</span> &#x2705;'

    } else if (year % 4 == 0 && year % 400 == 0) {
        if (year % 100 != 100) {
            verified = '<span style="background-color: lightgreen;"><strong> É BISSEXTO</strong</span> &#x2705;'
        }

    } else {
        verified = '<span style="background-color: red;"><strong>NÃO É BISSEXTO</strong</span> &#x274C;'
    }

    result.innerHTML = `<h2>Analisando o ano de ${year}...</h2>`
    result.innerHTML += `<p>O ano de ${year} ${verified}</p>`
}