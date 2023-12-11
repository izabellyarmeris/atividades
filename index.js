let agora = new Date()
let diasem = agora.getDay  /* o getday é justamente para pegar os dias da semana */

/*

Domingo
segunda
terça
quarta
quinta
sexta
sábado 

*/
console.log(diasem)

switch (diasem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`quinta`)
        break
    case 5:
        console.log(`sexta`)
        break
    case 6:
        console.log(`sábado`)
        break

}