function mostrarCartas() {
    document.querySelectorAll('.carta').forEach(carta => {
        carta.addEventListener("click", () => {
            carta.classList.remove("volteada");
        });
    });
}

export { mostrarCartas };
