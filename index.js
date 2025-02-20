// index.js
import { crearTablero } from "./rompecabezas/componentes/tablero/tablero.js";
import "./rompecabezas/componentes/header/header.js";

function cargarDOM() {
    let DOM = document.querySelector("#root");
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let div_footer = document.createElement('div');
    div_footer.className = "div_footer";
    contenedor.appendChild(div_footer);

    let div_tablero = document.createElement('div');
    div_tablero.className = "div_tablero";
    contenedor.appendChild(div_tablero);
    div_tablero.appendChild(crearTablero());

    let progreso = document.createElement('div');
    progreso.className = "div_progreso";
    contenedor.appendChild(progreso);

    DOM.appendChild(contenedor);
}

cargarDOM();