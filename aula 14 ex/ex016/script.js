function Contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var contagem = document.getElementById('Contagem')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || contagem.value.length == 0) {
        window.alert('[Erro] Preencha os dados e tente novamente!')
    } else if (fim.value < inicio.value) {
window.alert('[ERRO] O fim deve ser maior que o inicio!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let con = Number(contagem.value)
        for(let c = i; c <= f; c += con) {
            res.innerHTML += ` ${c} \u{1F449}`
        } res.innerHTML += `\u{1F4A9}`
}
}