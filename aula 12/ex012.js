var relogio = new Date()
var hora = relogio.getHours()
if (hora < 12 && hora >= 6) {
    console.log (`Bom dia, agora são ${hora} horas`)
} else if (hora > 18) {
    console.log (`Boa noite, agora são ${hora} horas`)
} else if (hora < 6) {
    console.log (`Boa madrugada, agora são ${hora} horas`)
} else {
    console.log (`Boa tarde, agora são ${hora} horas`)
}