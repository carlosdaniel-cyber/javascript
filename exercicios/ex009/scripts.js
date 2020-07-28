let cont = 0
let res = document.querySelector('section#res')
function clicou() {
    cont ++
    res.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques.</p>`
}
function zerar() {
    cont = 0
    res.innerHTML = null
}