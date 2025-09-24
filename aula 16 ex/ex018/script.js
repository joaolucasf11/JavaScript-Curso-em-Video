let valores = []
function adicionar() {
    var num = document.getElementById('numero')
    var n = Number(num.value)
    let lista = document.querySelector('function#flista')
    let res = document.getElementById('analise')
    if (n < 1 || n > 100 || valores.includes(n)) {
        window.alert('[Erro] Valor invalido ou já encontrado!')
    } else {
valores.push(n)
let item = document.createElement('option')
item.text = `Valor ${n} adcionado`
flista.appendChild(item)
analise.innerHTML = ''
} num.value = '' 
num.focus()
} 
function finalizar() {
    if (valores.length == 0) {
        window.alert('[ERRO] Adicione valores')
    } else {
       let total = valores.length
       let maior = valores[0]
       let menor = valores[0]
       let soma = 0
       let media = 0
       for (let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        } else if (valores[pos] < menor) {
            menor = valores[pos]
        }
       }
       media += soma / total
       analise.innerHTML = ''
       analise.innerHTML += `<p>Ao todo temos ${total} números cadastrados`
       analise.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
       analise.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
       analise.innerHTML += `<p>Somando tudo dá ${soma}`
       analise.innerHTML += `<p>A média dos valores é ${media}`
    }
}