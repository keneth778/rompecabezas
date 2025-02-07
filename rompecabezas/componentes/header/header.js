// header.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.className = "div_header";
    
    header.innerHTML = `
        <h1 class="titulo">Juego de Niveles</h1>
        <nav class="nav_niveles">
            <button class="btn_nivel">Nivel 1</button>
            <button class="btn_nivel">Nivel 2</button>
            <button class="btn_nivel">Nivel 3</button>
            <button class="btn_nivel">Nivel 4</button>
        </nav>
    `;
    
    document.body.prepend(header);
});
