// funcionesCartas.js

// Función para mezclar las cartas
export function mezclarCartas(cartas) {
    let cartasMezcladas = [...cartas]; // Copia el arreglo original para no modificarlo
    for (let i = cartasMezcladas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cartasMezcladas[i], cartasMezcladas[j]] = [cartasMezcladas[j], cartasMezcladas[i]];
    }
    return cartasMezcladas;
}

// Función para mostrar las cartas y verificar pares
let primeraCarta = null;
let segundaCarta = null;

export function mostrarCartas() {
    document.querySelectorAll('.carta').forEach(carta => {
        carta.addEventListener("click", () => {
            if (!carta.classList.contains("volteada")) {
                carta.classList.add("volteada"); // Voltea la carta al hacer clic
                verificarPares(carta); // Llama a la función verificarPares
            }
        });
    });
}

function verificarPares(carta) {
    if (!primeraCarta) {
        primeraCarta = carta; // Asigna la primera carta seleccionada
    } else {
        segundaCarta = carta; // Asigna la segunda carta seleccionada

        // Verifica si las cartas son iguales
        const sonPares = primeraCarta.querySelector('.frente').innerText === segundaCarta.querySelector('.frente').innerText;
        console.log(sonPares); // Imprime true o false en la consola

        // Reinicia las cartas seleccionadas
        primeraCarta = null;
        segundaCarta = null;
    }
}