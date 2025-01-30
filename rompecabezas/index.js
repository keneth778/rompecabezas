let DOM = document.querySelector("#root"); 
let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let div_header = document.createElement('div');
div_header.className = "div_header";
contenedor.appendChild(div_header);

let div_footer = document.createElement('div');
div_footer.className = "div_footer";
contenedor.appendChild(div_footer);

let div_tablero = document.createElement('div');
div_tablero.className = "div_tablero";
contenedor.appendChild(div_tablero);

let progreso = document.createElement('div');
progreso.className = "div_progreso";
contenedor.appendChild(progreso);

DOM.appendChild(contenedor);
