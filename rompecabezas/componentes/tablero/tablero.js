// tablero.js
import { todasLasCartas } from "./data.js";
import { mezclarCartas, mostrarCartas } from "./funcionesCartas.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta"; // Inicialmente sin la clase "volteada"

    let frente = document.createElement('div');
    frente.className = "cara frente";
    frente.innerText = contenido;

    let dorso = document.createElement('div');
    dorso.className = "cara dorso";
    dorso.innerText = "?";

    div.appendChild(frente);
    div.appendChild(dorso);

    return div;
}

export function crearTablero() {
    let div = document.createElement('div');
    div.className = "divTablero";

    let cartasMezcladas = mezclarCartas(todasLasCartas); // Mezcla las cartas
    cartasMezcladas.forEach((letra) => {
        div.appendChild(item(letra)); // Crea las cartas en el tablero
    });

    // Llama a mostrarCartas después de crear el tablero
    setTimeout(mostrarCartas, 100);

    return div;
}