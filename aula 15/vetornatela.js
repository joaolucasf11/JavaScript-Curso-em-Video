let valores = [8, 1, 7, 4, 2, 9]
/*
for (let pos = 0; pos < valores.lenght; pos++) {
    console.log(`A posição de ${pos} tem o valor ${valores[pos]}`) }
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}