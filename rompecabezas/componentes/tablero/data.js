function mezclarCartas() {
    let cartaPar1 = ['🤢','🦴','🦊','👅','🕳️','🍑','💪']
    let cartaPar2 = ['🤢','🦴','🦊','👅','🕳️','🍑','💪']

    let AllCartas = cartaPar1.concat(cartaPar2)

    for (let i = AllCartas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [AllCartas[i], AllCartas[j]] = [AllCartas[j], AllCartas[i]]; // Intercambia elementos
    }

    return AllCartas
}

let todasLasCartas = mezclarCartas();



export {todasLasCartas}
