function mezclarCartas(cartas) {
    let cartasMezcladas = [...cartas]; // Copia el arreglo original para no modificarlo
    for (let i = cartasMezcladas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartasMezcladas[i], cartasMezcladas[j]] = [cartasMezcladas[j], cartasMezcladas[i]];
    }
    return cartasMezcladas;
}

export { mezclarCartas };
