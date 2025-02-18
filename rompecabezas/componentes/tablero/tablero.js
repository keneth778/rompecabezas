import { todasLasCartas } from "./data.js";
import { mezclarCartas } from "./itemcarta.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "carta volteada"; 

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

function crearTablero() {
    let div = document.createElement('div');
    div.className = "divTablero";

    let cartasMezcladas = mezclarCartas(todasLasCartas); // Se mezclan aquí
    cartasMezcladas.forEach((letra) => {
        div.appendChild(item(letra));
    });

    return div;
}

export { crearTablero };
