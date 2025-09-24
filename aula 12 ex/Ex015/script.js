function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            //criança
            img.setAttribute('src', 'CriançaM.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'AdolescenteM.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'Homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'Idoso.jpg')
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            //criança
            img.setAttribute('src', 'CriançaF.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'AdolescenteF.jpg')
        } else if (idade < 50){
            //adulto
            img.setAttribute('src', 'Mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'Idosa.jpg')
    }
}
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
  res.appendChild(img)
  img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")
  }
}