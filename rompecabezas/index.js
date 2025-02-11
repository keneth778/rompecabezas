import { todasLasCartas } from "./componentes/tablero/data.js";
import { cargarCartas } from "./componentes/tablero/tablero.js";
import "./componentes/header/header.js"; // Importar el script del header

let DOM = document.querySelector("#root"); 
let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let div_footer = document.createElement('div');
div_footer.className = "div_footer";
contenedor.appendChild(div_footer);

let div_tablero = document.createElement('div');
div_tablero.className = "div_tablero";
contenedor.appendChild(div_tablero);
div_tablero.appendChild(cargarCartas(todasLasCartas));



let progreso = document.createElement('div');
progreso.className = "div_progreso";
contenedor.appendChild(progreso);

DOM.appendChild(contenedor);

let todasLasCartasDelDOM = document.querySelectorAll('.carta')
todasLasCartasDelDOM.forEach(cadaCarta => {
    cadaCarta.addEventListener("click", () => {
        cadaCarta.classList.add("marcado")  ; 
    });
});
