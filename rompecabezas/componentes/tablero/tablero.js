import { todasLasCartas } from "./data.js";

// Función para crear una carta
function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta volteada"; // Iniciar volteada

    // Cara frontal
    let frente = document.createElement('div');
    frente.className = "cara frente";
    frente.innerText = contenido; // Contenido de la carta (emoji)

    // Cara trasera
    let dorso = document.createElement('div');
    dorso.className = "cara dorso";
    dorso.innerText = "?"; // Texto o ícono del dorso

    // Agregar caras a la carta
    div.appendChild(frente);
    div.appendChild(dorso);

    return div;
}

// Función para cargar las cartas en el tablero
function cargarCartas(todasLasCartas) {
    let div = document.createElement('div');
    div.className = "divTablero";

    todasLasCartas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { cargarCartas };